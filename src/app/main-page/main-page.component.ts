import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
 url: string = '/';
 OutwardRemittancedropDown:string | null = null;
 MethodOutwardRemittance(type: string) {
  if (this.OutwardRemittancedropDown === type) {
    this.OutwardRemittancedropDown = null; 
  } else {
    this.OutwardRemittancedropDown = type; 
  }
}

  constructor(
    private route: Router
  ) { }
  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
gotourl(url: string): void {
  this.route.navigate(["/"+url]);
}

}
