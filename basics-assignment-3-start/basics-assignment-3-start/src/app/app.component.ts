import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  logArray: string[] = [];
  userName: string = '';

  toggleDetails() {
    this.showDetails = !this.showDetails;
    if(this.showDetails){
    const logEntry = `${this.userName} clicked at ${new Date().toLocaleString()}`;
    this.logArray.push(logEntry);
    }
  }
}
