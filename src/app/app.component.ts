import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  userName:string='';
  datNotFound:string=''
  headerLoading:boolean=false;
  repoLoading:boolean=false;
  currentPage: number = 1;
  search_header_results:any=[]
  repo_data:any=[]
  constructor(private apiService: ApiService) {}

  searchHandeler(){
    this.headerLoading=true;
    this.repoLoading=true;
    this.apiService.getUser(this.userName).subscribe({next:(data)=>{this.search_header_results=data;if(data) {this.headerLoading=false}},error:(error)=>{this.datNotFound="No data Found";this.headerLoading=false;this.search_header_results=[];setTimeout(()=>{this.datNotFound=''},2000)}});
    
    this.apiService.getRepos(this.userName).subscribe({next:(data)=>{this.repo_data=data;this.repoLoading=false;if(this.repo_data){this.repoLoading=false}},error:(error)=>{this.datNotFound="No data Found";this.repoLoading=false;this.repo_data=[];setTimeout(()=>{this.datNotFound=''},2000)}})
    
    this.userName=''
  }
}
