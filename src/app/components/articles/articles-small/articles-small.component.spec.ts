import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSmallComponent } from './articles-small.component';

describe('ArticlesSmallComponent', () => {
  let component: ArticlesSmallComponent;
  let fixture: ComponentFixture<ArticlesSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
