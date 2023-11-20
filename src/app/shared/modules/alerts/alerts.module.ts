import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { NotifyComponent } from './notify/notify.component';
import { Options } from './interfaces/options.type';
import { DEFAULT_OPTIONS } from './consts/default-options.const';
import { AlertService } from './alert.service';

export const OPTIONS = new InjectionToken<Options>('options');
export function optionsFactory(options: any) {
    return {
        ...DEFAULT_OPTIONS,
        ...options,
    };
}

@NgModule({
    declarations: [AlertsComponent, NotifyComponent],
    imports: [CommonModule],
    exports: [AlertsComponent],
})
export class AlertsModule {
    static forRoot(options: Options = {}): ModuleWithProviders<AlertsModule> {
        return {
            ngModule: AlertsModule,
            providers: [
                AlertService,
                {
                    provide: OPTIONS,
                    useValue: options,
                },
                {
                    provide: 'options',
                    useFactory: optionsFactory,
                    deps: [OPTIONS],
                },
            ],
        };
    }
}
