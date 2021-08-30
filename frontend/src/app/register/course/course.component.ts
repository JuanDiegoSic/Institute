import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSecons: number = 2;

  constructor(
    private _CourseService: CourseService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {
  }


  registerCourse() {
    if (
      !this.registerData.name ||
      !this.registerData.numberStudent ||
      !this.registerData.schedule


    ) {
      console.log('Failed process: Incomplete data');
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._CourseService.registerCourse(this.registerData).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/course']);
          this.message = 'Successfull user registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecons * 1000,
      panelClass:['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecons * 1000,
      panelClass:['style-snackBarFalse'],
    });

  }

}
