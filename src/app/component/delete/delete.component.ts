import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  users: any = [];
  currentPage = 1;
  itemsPerPage = 3;

  constructor(private postService: PostService, private _snackBar:SnackBarService) {}

  ngOnInit() {
    this.findUser();
  }

  delete(id:any){
    if(confirm('Are You Sure to Delete '+ id)){
      this.postService.deleteUser(id).subscribe((response) => {
        if(response){
          this._snackBar.trigger('deleted', 'close')

          for(let i = 0; i < this.users.length; i++){
            if(this.users[i].id == id){
              this.users.splice(i, 1);
              return;
            }
          }
        }
      });
    }
  }

  findUser() {
    this.postService.getUsers(this.currentPage, this.itemsPerPage).subscribe((data: any) => {
        this.users = data.data;
      },(error) => {
        if(error){
          this._snackBar.trigger('User Not Found', 'close');
        }
      }
    );
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.findUser();
  }

}
