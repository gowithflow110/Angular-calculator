import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output: string = '';
  isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  setTextFromButton(event: Event): void {
    const value = (event.target as HTMLButtonElement).innerText;

    if (value === 'C') {
      this.output = '';
    } else if (value === '⌫' || value === '←') {
      this.output = this.output.slice(0, -1);
    } else {
      this.output += value;
    }
  }

  calculate(): void {
    try {
      this.output = eval(this.output).toString();
    } catch (e) {
      this.output = 'Error';
    }
  }
}
