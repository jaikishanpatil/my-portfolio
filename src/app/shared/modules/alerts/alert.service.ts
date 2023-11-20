import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_ICONS } from './consts/default-icons.const';
import { AlertTypes } from './enums/alerts.enum';
import { Icons } from './interfaces/icons';
import { AlertsEvent } from './interfaces/notification-event.type';
import { Alerts } from './interfaces/notification.type';

@Injectable()
export class AlertService {
    constructor(@Inject('options') public globalOptions: any) {}

    emitter = new Subject<AlertsEvent>();
    icons: Icons = DEFAULT_ICONS;

    set(notification: Alerts, to: boolean): Alerts {
        notification.id =
            notification.override && notification.override.id
                ? notification.override.id
                : Math.random().toString(36).substring(3);
        notification.click = new EventEmitter<{}>();
        notification.clickIcon = new EventEmitter<{}>();
        notification.timeoutEnd = new EventEmitter<{}>();

        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }

    success(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Success,
                icon: this.icons.success,
                override,
                context,
            },
            true
        );
    }

    error(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Error,
                icon: this.icons.error,
                override,
                context,
            },
            true
        );
    }

    alert(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Alert,
                icon: this.icons.alert,
                override,
                context,
            },
            true
        );
    }

    info(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Info,
                icon: this.icons.info,
                override,
                context,
            },
            true
        );
    }

    warn(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Warn,
                icon: this.icons.warn,
                override,
                context,
            },
            true
        );
    }

    bare(
        title: any = '',
        content: any = '',
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content: content || '',
                type: AlertTypes.Bare,
                icon: 'bare',
                override,
                context,
            },
            true
        );
    }

    // With type method
    create(
        title: any = '',
        content: any = '',
        type = AlertTypes.Success,
        override?: any,
        context?: any
    ): Alerts {
        return this.set(
            {
                title,
                content,
                type,
                icon: (this.icons as any)[type],
                override,
                context,
            },
            true
        );
    }

    // HTML Alerts method
    html(
        html: any,
        type = AlertTypes.Success,
        override?: any,
        icon = 'bare',
        context?: any
    ): Alerts {
        return this.set(
            { html, type, icon: (this.icons as any)[icon], override, context },
            true
        );
    }

    // Remove all Alertss method
    remove(id?: string): void {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        } else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
}
