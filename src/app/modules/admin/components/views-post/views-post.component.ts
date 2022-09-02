import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../service/view.service';

@Component({
  selector: 'app-views-post',
  templateUrl: './views-post.component.html',
  styleUrls: ['./views-post.component.css'],
})
export class ViewsPostComponent implements OnInit {
  constructor(private _viewService: ViewService) {}

  ngOnInit(): void {
    this.getPost();
  }
  data: any;
  getPost() {
    this._viewService.getPost().subscribe((res) => {
      this.data = res;
    });
  }
}
