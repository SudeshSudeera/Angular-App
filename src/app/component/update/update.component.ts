import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  userId!: number;
  users: any = [];

  constructor(private postService: PostService, private _snackBar: SnackBarService) {}

  form = new FormGroup({
    id:new FormControl('',[Validators.required, Validators.maxLength(5)]),
    email:new FormControl('',Validators.required),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    avatar:new FormControl('',Validators.required)

    // name:new FormControl('',Validators.required),
    // job:new FormControl('',Validators.required)
  });

  updateData() {
    this.postService.updateUser(this.userId,{
      id:this.form.get('id')?.value,
      email:this.form.get('email')?.value,
      first_name:this.form.get('first_name')?.value,
      last_name:this.form.get('last_name')?.value,
      avatar:this.form.get('avatar')?.value

      // name:this.form.get('name')?.value,
      // job:this.form.get('job')?.value

    }).subscribe((response) => {
      console.log(response);
      
        if(response){
          this._snackBar.trigger('Updated', 'Close');
        }
        this.form.reset();
      });
  }

  findUser() {
    this.postService.getUserById(this.userId).subscribe((data: any) => {
        const users = data.data;
        this.form.patchValue(users);
      },(error) => {
        if(error){
          this._snackBar.trigger('User Not Found', 'close');
        }
      }
    );
  }

}
