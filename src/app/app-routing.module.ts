import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './plugins/guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]

  },
  { path: 'login', component: LoginComponent},
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then( m => m.DoctorPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'pharmacy',
    loadChildren: () => import('./pharmacy/pharmacy.module').then( m => m.PharmacyPageModule),
    // canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
