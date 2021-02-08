import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, Angular2: HTMLInputElement): boolean {
    let t = title.value;
    let a= Angular2.value;
    console.log(`Adding article title: `+t+ ` and link: `+ a);
    console.log(`Adding article title: `+title.value+ ` and link: `+ Angular2.value);
    console.log(`Adding article title: ${title.value} and link: ${Angular2.value}`);
    return false;
  }
}
