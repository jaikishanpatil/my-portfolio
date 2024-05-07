import { AnimationType } from '../enums/alerts.enum';
import { Icons } from './icons';

export type VerticalPosition = 'top' | 'bottom' | 'middle';
export type HorizontalPosition = 'right' | 'left' | 'center';
export interface Position extends Array<VerticalPosition | HorizontalPosition> {
    0: VerticalPosition;
    1: HorizontalPosition;
}

export interface Options {
    position?: Position;
    timeOut?: number;
    showProgressBar?: boolean;
    pauseOnHover?: boolean;
    lastOnBottom?: boolean;
    clickToClose?: boolean;
    clickIconToClose?: boolean;
    maxLength?: number;
    maxStack?: number;
    preventDuplicates?: boolean;
    preventLastDuplicates?: boolean | string;
    theClass?: string;
    rtl?: boolean;
    animate?: AnimationType;
    icons?: Icons;
}
