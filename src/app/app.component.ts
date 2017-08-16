import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name:'TestServer', content:''}];

  addServer(server){
    this.serverElements.push(server);
  }

  addBluePrint(blueprint){
    this.serverElements.push(blueprint);
  }
}
