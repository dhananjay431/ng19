import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
export const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [{
            path: 'main1',
            loadComponent: () => import('./pages/main1/main1.component').then(c => c.Main1Component)
          },{
            path: 'main2',
            loadComponent: () => import('./pages/main2/main2.component').then(c => c.Main2Component)
          },{
            path: 'main3',
            loadComponent: () => import('./pages/main3/main3.component').then(c => c.Main3Component)
          },{
            path: 'main4',
            loadComponent: () => import('./pages/main4/main4.component').then(c => c.Main4Component)
          },{
            path: 'main5',
            loadComponent: () => import('./pages/main5/main5.component').then(c => c.Main5Component)
          },{
            path: 'main6',
            loadComponent: () => import('./pages/main6/main6.component').then(c => c.Main6Component)
          },{
            path: 'main7',
            loadComponent: () => import('./pages/main7/main7.component').then(c => c.Main7Component)
          },{
            path: 'main8',
            loadComponent: () => import('./pages/main8/main8.component').then(c => c.Main8Component)
          },{
            path: 'main9',
            loadComponent: () => import('./pages/main9/main9.component').then(c => c.Main9Component)
          },{
            path: 'main10',
            loadComponent: () => import('./pages/main10/main10.component').then(c => c.Main10Component)
          },{
            path: 'main11',
            loadComponent: () => import('./pages/main11/main11.component').then(c => c.Main11Component)
          },{
            path: 'main12',
            loadComponent: () => import('./pages/main12/main12.component').then(c => c.Main12Component)
          }]
    }
    
];
