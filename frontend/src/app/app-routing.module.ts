import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { StudentComponent } from './register/student/student.component';
import { TeacherComponent } from './register/teacher/teacher.component';
import { MatterComponent } from './register/matter/matter.component';
import { CourseComponent } from './register/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'matter',
    component: MatterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
