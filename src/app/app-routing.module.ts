import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateJobComponent } from './create-job/create-job.component';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  {path:'scheduler',component:SchedulerComponent,canActivate:[AuthGuard]},
  {path:'create-job',component:CreateJobComponent,canActivate:[AuthGuard]},
  {path:'upload-data',component:UploadDataComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
