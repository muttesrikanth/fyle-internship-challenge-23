import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {
  @Input() repo_data: any = [];
  POSTS: any;
  page: number = 1;
  tablesize: number = 10;
  tablesizes: any = [10, 50, 100];

  onValueChange(event:any){
 this.page=1;
 this.tablesize=event.target.value;
  }
  pageChange(event:any){
    this.page=event
  }
  prevHandeller(){
    if(this.page!==1){

      this.page-=1
    }
  }
nextHandeller(){
  const maxPage = Math.ceil(this.repo_data.length / this.tablesize);
  if (this.page < maxPage) {
    this.page++;
  }
}
}
