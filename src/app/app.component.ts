import { Component } from '@angular/core';
import { BootServiceService } from './boot-service.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UIproj';

  constructor(

    private router: Router) {

    this.router.events.pipe(

      filter(event => event instanceof NavigationStart)

    ).subscribe((event: any) => {

      if (typeof localStorage === 'undefined') {

        return;

      }

      });

    }
}
