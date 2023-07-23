import {TabsPage} from './tabs-page';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestBed, waitForAsync} from '@angular/core/testing';
describe('TabsPage', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the tabs page', () => {
    const fixture = TestBed.createComponent(TabsPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});