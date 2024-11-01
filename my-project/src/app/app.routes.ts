import { Routes } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { BotaoComponent } from './botao/botao.component';

export const routes: Routes = [
    {
        path: 'logo',
        component: LogoComponent,
    },
    {
        path:'button',
        component:BotaoComponent 
    },
];
