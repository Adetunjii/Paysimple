import { routes } from './app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';

describe('routes', () => {
  it('should contain a route for /main', () => {
    expect(routes).toContain({
      path: 'main',
      component: DashboardComponent,
    });
  });
});
