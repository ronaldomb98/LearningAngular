import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './src/todo/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([
            TodoEffects
        ]),
        StoreDevtoolsModule.instrument({ maxAge: 10 })
    ]
})
export class StateModule {}