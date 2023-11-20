import { DEFAULT_ICONS } from './default-icons.const';
import { Options } from '../interfaces/options.type';
import { AnimationType } from '../enums/alerts.enum';

export const DEFAULT_OPTIONS: Options = {
    position: ['top', 'right'],
    timeOut: 4000,
    showProgressBar: true,
    pauseOnHover: true,
    lastOnBottom: true,
    clickToClose: true,
    clickIconToClose: false,
    maxLength: 10,
    maxStack: 8,
    preventDuplicates: false,
    preventLastDuplicates: false,
    theClass: '',
    rtl: false,
    animate: AnimationType.FromRight,
    icons: DEFAULT_ICONS,
};
