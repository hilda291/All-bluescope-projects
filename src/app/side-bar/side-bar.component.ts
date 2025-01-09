import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
dropdown: string | null = null;
MethoddropDown(type: string) {
  if (this.dropdown === type) {
    this.dropdown = null; 
  } else {
    this.dropdown = type; 
  }
}
  url: string = '/';

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
