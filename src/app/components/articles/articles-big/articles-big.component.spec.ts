import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBigComponent } from './articles-big.component';

describe('ArticlesBigComponent', () => {
  let component: ArticlesBigComponent;
  let fixture: ComponentFixture<ArticlesBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
