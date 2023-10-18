import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/data-fake';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  urlImg: string = '';
  title: string = '';
  date: string = '';
  body: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
     )
 
     this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const post = dataFake.filter(element => element.id == id)[0]
    this.urlImg = post.imgUrl;
    this.title = post.title;
    this.date = post.date;
    this.body = post.body;
  }

}
