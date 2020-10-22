import { Component, OnInit } from '@angular/core';
import {AtcservicesService} from '../../services/atcservices.service'

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  specificAcc ={}
  accounts = [];
  transactions = [];
  obj: LooseObject = {};
  accSize = "";
  isPopup = false;
  constructor(public service : AtcservicesService) { }

  ngOnInit(): void {
    this.getAllAccounts();
    if(this.accounts.length > 9)
      this.accSize = this.accounts.length.toString();
    else
    this.accSize = "0" + this.accounts.length;
  }

  getAllAccounts() {
      this.accounts = this.service.getAllAccounts();
  }

  close() {
    this.isPopup = false;
  }

  open() {
    this.isPopup = true;
  }

  openAcc(accNo) {
    this.getAllTrans(accNo);
    this.getspecificAcc(accNo);
  }

  public getspecificAcc(accNo) {
    this.specificAcc = this.service.getSpecificAccount(accNo);
  }

  public getAllTrans(accNo) {
    this.transactions = []
    for(let trans of this.service.getAllTransactions(accNo)) {
      this.obj={}
      this.obj.transactionID = trans["transactionID"]
      this.obj.sAccount = trans["sAccount"]
      this.obj.rAccount = trans["rAccount"]

      if (accNo == this.obj.sAccount)
        this.obj.type = "DEBIT"
      else if (accNo == this.obj.rAccount)
        this.obj.type = "CREDIT"
        
      this.obj.ammount = trans["ammount"]
      this.transactions.push(this.obj)
    }
  }

  public openTab(evt, tabName) {
    var i, tabcontent, tabcontentMain, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tabcontentMain = document.getElementsByClassName("tabcontentMain");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tabcontentMain.length; i++) {
      tabcontentMain[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

}
