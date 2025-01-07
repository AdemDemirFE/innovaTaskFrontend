import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./pages/barcode/barcode.module').then( m => m.BarcodePageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then( m => m.MaterialPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./pages/chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'personnel',
    loadChildren: () => import('./pages/personnel/personnel.module').then( m => m.PersonnelPageModule)
  },
  {
    path: 'app-info',
    loadChildren: () => import('./pages/app-info/app-info.module').then( m => m.AppInfoPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'web-data-rocks-example',
    loadChildren: () => import('./pages/web-data-rocks-example/web-data-rocks-example.module').then( m => m.WebDataRocksExamplePageModule)
  },
  {
    path: 'sweet-alert',
    loadChildren: () => import('./pages/sweet-alert/sweet-alert.module').then( m => m.SweetAlertPageModule)
  },
  {
    path: 'chat-gpt',
    loadChildren: () => import('./pages/chat-gpt/chat-gpt.module').then( m => m.ChatGPTPageModule)
  }










];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
