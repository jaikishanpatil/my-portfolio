import { Alerts } from './notification.type';

export interface AlertsEvent {
    add?: boolean;
    command: string;
    id?: string;
    notification?: Alerts;
}
