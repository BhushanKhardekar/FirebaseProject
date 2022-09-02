import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../service/view.service';

@Component({
  selector: 'app-views-todo',
  templateUrl: './views-todo.component.html',
  styleUrls: ['./views-todo.component.css']
})
export class ViewsTodoComponent implements OnInit {

  constructor(private _viewService : ViewService) { }

  ngOnInit(): void {
    this.getTodo();
  }
  data:any;

  getTodo(){
    this._viewService.getTodo().subscribe(res =>{
      this.data = res;
    })
  }
}
