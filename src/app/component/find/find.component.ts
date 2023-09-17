import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent{

  userId!: number;
  users: any = [];

  constructor(private postService: PostService, private _snackBar: SnackBarService) {}

  findUser() {
    this.postService.getUserById(this.userId).subscribe((data: any) => {
        this.users = data.data;
      },(error) => {
        if(error){
          this._snackBar.trigger('User Not Found', 'close');
        }
      }
    );
  }
}

