// import { AnalyticsService } from 'src/app/services/analytics.service';
// import { SidebarComponent } from './sidebar.component';
// import { Observable, from, of, throwError } from 'rxjs';

// describe('SidebarComponent', () => {
//   let component: SidebarComponent;
//   let service: AnalyticsService;

//   beforeEach(() => {
//     service = new AnalyticsService(null);
//     component = new SidebarComponent(null, service);
//   });

//   it('should set todos property with the items returned from the server', () => {
//     spyOn(service, 'getDailySales').and.callFake(() => {
//       return from([[1, 2, 3]]);
//     });

//     component.ngOnInit();

//     expect(component.salesItems.length).toBe(3);
//   });

//   it('should call the server to save the changes to when a new item is added', () => {
//     let spy = spyOn(service, 'add').and.callFake((t) => {
//       return of(null);
//     });

//     //act
//     component.add();

//     expect(spy).toHaveBeenCalled();
//   });

//   it('should add the new todo returned from the server', () => {
//     let newItems: number[] = [4, 5, 6];

//     let spy = spyOn(service, 'add').and.returnValue(from([newItems]));

//     //act
//     component.add();

//     expect(component.salesItems.length).toBeGreaterThan(0);
//   });

//   it('should set the message property if the server returns an error', () => {
//     let error = 'an error occured';

//     let spy = spyOn(service, 'add').and.returnValue(throwError(error));

//     //act
//     component.add();

//     expect(component.message).toBe(error);
//   });
// });
