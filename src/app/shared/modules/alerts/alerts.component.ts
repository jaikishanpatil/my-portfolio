import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';
import { AnimationType } from './enums/alerts.enum';
import { Alerts } from './interfaces/notification.type';
import { Options, Position } from './interfaces/options.type';

@Component({
  selector: 'lib-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit, OnDestroy {
  constructor(private service: AlertService, private cd: ChangeDetectorRef) {}

  @Input() set options(opt: Options) {
    this.usingComponentOptions = true;
    this.attachChanges(opt);
  }

  @Output() create = new EventEmitter();
  @Output() destroy = new EventEmitter();

  notifications: Alerts[] = [];
  position: Position = ['bottom', 'right'];

  private lastNotificationCreated!: Alerts;
  private listener!: Subscription;

  // Received values
  private lastOnBottom = true;
  private maxStack = 8;
  private preventLastDuplicates: any = false;
  private preventDuplicates = false;

  // Sent values
  timeOut = 0;
  maxLength = 0;
  clickToClose = false;
  clickIconToClose = true;
  showProgressBar = true;
  pauseOnHover = true;
  theClass = '';
  rtl = false;
  animate: AnimationType = AnimationType.FromRight;

  private usingComponentOptions = false;

  ngOnInit() {
    if (!this.usingComponentOptions) {
      this.attachChanges(this.service.globalOptions);
    }

    this.listener = this.service.emitter.subscribe((item) => {
      switch (item.command) {
        case 'cleanAll':
          this.notifications = [];
          break;

        case 'clean':
          this.cleanSingle(item.id!);
          break;

        case 'set':
          if (item.add) {
            this.add(item.notification!);
          } else {
            this.defaultBehavior(item);
          }
          break;

        default:
          this.defaultBehavior(item);
          break;
      }
      if (!(this.cd as ViewRef).destroyed) {
        this.cd.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener.unsubscribe();
    }
    this.cd.detach();
  }

  // Default behavior on event
  defaultBehavior(value: any): void {
    this.notifications.splice(
      this.notifications.indexOf(value.notification),
      1
    );
    this.destroy.emit(this.buildEmit(value.notification, false));
  }

  // Add the new notification to the notification array
  add(item: Alerts): void {
    item.createdOn = new Date();

    const toBlock: boolean =
      this.preventLastDuplicates || this.preventDuplicates
        ? this.block(item)
        : false;

    // Save this as the last created notification
    this.lastNotificationCreated = item;
    // Override icon if set
    if (
      item.override &&
      item.override.icons &&
      item.override.icons[item.type]
    ) {
      item.icon = item.override.icons[item.type];
    }

    if (!toBlock) {
      // Check if the notification should be added at the start or the end of the array
      if (this.lastOnBottom) {
        if (this.notifications.length >= this.maxStack) {
          this.notifications.splice(0, 1);
        }

        this.notifications.push(item);
      } else {
        if (this.notifications.length >= this.maxStack) {
          this.notifications.splice(this.notifications.length - 1, 1);
        }

        this.notifications.splice(0, 0, item);
      }

      this.create.emit(this.buildEmit(item, true));
    }
  }

  // Check if notifications should be prevented
  block(item: Alerts): boolean {
    const toCheck = item.html ? this.checkHtml : this.checkStandard;

    if (this.preventDuplicates && this.notifications.length > 0) {
      for (const notification of this.notifications) {
        if (toCheck(notification, item)) {
          return true;
        }
      }
    }

    if (this.preventLastDuplicates) {
      let comp: Alerts;

      if (
        this.preventLastDuplicates === 'visible' &&
        this.notifications.length > 0
      ) {
        if (this.lastOnBottom) {
          comp = this.notifications[this.notifications.length - 1];
        } else {
          comp = this.notifications[0];
        }
      } else if (
        this.preventLastDuplicates === 'all' &&
        this.lastNotificationCreated
      ) {
        comp = this.lastNotificationCreated;
      } else {
        return false;
      }
      return toCheck(comp, item);
    }

    return false;
  }

  checkStandard(checker: Alerts, item: Alerts): boolean {
    return (
      checker.type === item.type &&
      checker.title === item.title &&
      checker.content === item.content
    );
  }

  checkHtml(checker: Alerts, item: Alerts): boolean {
    return checker.html
      ? checker.type === item.type &&
          checker.title === item.title &&
          checker.content === item.content &&
          checker.html === item.html
      : false;
  }

  // Attach all the changes received in the options object
  attachChanges(options: any) {
    for (const key in options) {
      if (this.hasOwnProperty(key)) {
        (this as any)[key] = options[key];
      } else if (key === 'icons') {
        this.service.icons = options[key];
      }
    }
  }

  buildEmit(notification: Alerts, to: boolean) {
    const toEmit: Alerts = {
      createdOn: notification.createdOn,
      type: notification.type,
      icon: notification.icon,
      id: notification.id,
    };

    if (notification.html) {
      toEmit.html = notification.html;
    } else {
      toEmit.title = notification.title;
      toEmit.content = notification.content;
    }

    if (!to) {
      toEmit.destroyedOn = new Date();
    }

    return toEmit;
  }

  cleanSingle(id: string): void {
    let indexOfDelete = 0;
    let doDelete = false;
    let noti: any;

    this.notifications.forEach((notification, idx) => {
      if (notification.id === id) {
        indexOfDelete = idx;
        noti = notification;
        doDelete = true;
      }
    });

    if (doDelete) {
      this.notifications.splice(indexOfDelete, 1);
      this.destroy.emit(this.buildEmit(noti, false));
    }
  }
}
