import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  @Output() onServerAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBluePrintAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  addServer() {
    this.onServerAdded.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  addBluePrint() {
    this.onBluePrintAdded.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
