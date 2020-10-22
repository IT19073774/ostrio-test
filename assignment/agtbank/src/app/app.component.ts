import { Component } from '@angular/core';
import {AtcservicesService} from './services/atcservices.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ostrio';

  constructor(public service : AtcservicesService) { }


}
