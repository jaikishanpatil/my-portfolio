import { EventEmitter } from '@angular/core';
import { AlertTypes, AnimationType } from '../enums/alerts.enum';

export interface Alerts {
    id?: string;
    type: AlertTypes;
    icon: string;
    title?: any;
    content?: any;
    override?: any;
    html?: any;
    state?: string;
    createdOn?: Date;
    destroyedOn?: Date;
    animate?: AnimationType;
    timeOut?: number;
    maxLength?: number;
    pauseOnHover?: boolean;
    clickToClose?: boolean;
    clickIconToClose?: boolean;
    theClass?: string;
    click?: EventEmitter<{}>;
    clickIcon?: EventEmitter<{}>;
    timeoutEnd?: EventEmitter<{}>;
    context?: any;
}
