import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApicomponentComponent } from './rest-apicomponent.component';

describe('RestApicomponentComponent', () => {
  let component: RestApicomponentComponent;
  let fixture: ComponentFixture<RestApicomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApicomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
