import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-json-tojson',
  templateUrl: './json-tojson.component.html',
  styleUrls: ['./json-tojson.component.css']
})
export class JsonTojsonComponent {
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
