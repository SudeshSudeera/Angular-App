import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{

  users: any = [];
  currentPage = 1;
  itemsPerPage = 3;

  constructor(private postService: PostService, private _snackBar:SnackBarService) {}

  ngOnInit() {
    this.findUser();
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
