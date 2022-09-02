import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../service/view.service';

@Component({
  selector: 'app-views-user',
  templateUrl: './views-user.component.html',
  styleUrls: ['./views-user.component.css']
})
export class ViewsUserComponent implements OnInit {

  constructor(private _viewService : ViewService) { }


  ngOnInit(): void {
    this.getUser();
  }

  data : any;
  getUser(){
    this._viewService.getUser().subscribe(res => {
      this.data =res;
    })
  }
}
