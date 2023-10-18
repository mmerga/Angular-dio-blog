import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-small',
  templateUrl: './articles-small.component.html',
  styleUrls: ['./articles-small.component.css']
})
export class ArticlesSmallComponent implements OnInit {

  @Input()
  imgUrl: string = '';
  @Input()
  date: string = '';
  @Input()
  title: string = '';
  @Input()
  id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
