import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModuleComponent } from './share-module.component';

describe('ShareModuleComponent', () => {
  let component: ShareModuleComponent;
  let fixture: ComponentFixture<ShareModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
