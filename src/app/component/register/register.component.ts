import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private postService: PostService, private _snackBar: SnackBarService) {}

  form = new FormGroup({
    /* id:new FormControl('',[Validators.required, Validators.maxLength(5)]),
    email:new FormControl('',Validators.required),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    imageUrl:new FormControl('',Validators.required) */

    name:new FormControl('',Validators.required),
    job:new FormControl('',Validators.required)
  });

  createData() {
    this.postService.createUser({
      // id:this.form.get('id')?.value,
      // email:this.form.get('email')?.value,
      // firstName:this.form.get('firstName')?.value,
      // lastName:this.form.get('lastName')?.value,
      // imageUrl:this.form.get('imageUrl')?.value

      name:this.form.get('name')?.value,
      job:this.form.get('job')?.value

    }).subscribe((response) => {
      console.log(response);
      
        if(response){
          this._snackBar.trigger('Saved', 'Close');
        }
        this.form.reset();
      });
  }

  /* newUser: any = {
    name:this.form.get('name')?.value,
    job:this.form.get('job')?.value
  };

  createData() {
    this.postService.createUser(this.newUser).subscribe((data: any) => {
      console.log('User registration successful:', data);
      this.newUser = {
        // id:this.form.get('id')?.value,
        // email:this.form.get('email')?.value,
        // firstName:this.form.get('firstName')?.value,
        // lastName:this.form.get('lastName')?.value,
        // imageUrl:this.form.get('imageUrl')?.value
        name:this.form.get('name')?.value,
        job:this.form.get('job')?.value
      };
    },(error) => {
      console.error('User registration failed:', error);
    });
  } */

}
