import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-big',
  templateUrl: './articles-big.component.html',
  styleUrls: ['./articles-big.component.css']
})
export class ArticlesBigComponent implements OnInit {

  @Input()
  imgUrl: string = '';
  @Input()
  date: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  id: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
