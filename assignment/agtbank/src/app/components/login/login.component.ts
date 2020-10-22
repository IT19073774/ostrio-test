import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AtcservicesService} from '../../services/atcservices.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : AtcservicesService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {

    this.service.authenticateLogin(signInForm.value.accno, signInForm.value.password);

  } 
}
