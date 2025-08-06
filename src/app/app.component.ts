import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular14-starter';

add(x:number, y:number): void {
   document.getElementById('txt').innerHTML = `${Number(x) + Number(y)}`;
  }

sub(x:number, y:number): void {
   document.getElementById('txt').innerHTML = `${Number(x) - Number(y)}`;
  }

mul(x:number, y:number): void {
   document.getElementById('txt').innerHTML = `${Number(x) * Number(y)}`;
  }

divd(x:number, y:number): void {
   document.getElementById('txt').innerHTML = `${Number(x) / Number(y)}`;
  }

}
