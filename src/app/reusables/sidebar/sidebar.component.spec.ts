import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';

class RouterStub {
  navigateByUrl(params) {}
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [SidebarComponent],
      providers: [AnalyticsService, { provide: Router, useClass: RouterStub }],

      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the respective nav links', () => {
    let spy = spyOn(router, 'navigateByUrl');

    component.route('');

    expect(spy).toHaveBeenCalled();
  });

  it('should not redirect if the url is null', () => {
    let spy = spyOn(router, 'navigateByUrl');

    component.route(null);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });
});
