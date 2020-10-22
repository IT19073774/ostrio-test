import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AtcservicesService {

  constructor(private router: Router) { }
  login=[
    {username:"ashvinnkana",
    password:"a1234"}
  ]

  Users=[
    {userID:"U0001",
    username:"ashvinnkana",
    fullname:"Ashvinn Kanagar"}
  ]

  account = [
    {accountNo:"15423168775", 
    openedDate:"12/06/2020",
    ownerID:"U0001",
    lTransactionDate:"22/10/2020",
    branchName:"Malabe",
    balance:"25000",
    type:"Savings Account"},

    {accountNo:"24572368451", 
    openedDate:"12/06/2020",
    ownerID:"U0001",
    lTransactionDate:"22/10/2020",
    branchName:"Malabe",
    balance:"25000",
    type:"Savings Account"},

    {accountNo:"38687795512", 
    openedDate:"12/06/2020",
    ownerID:"U0001",
    lTransactionDate:"22/10/2020",
    branchName:"Malabe",
    balance:"55000",
    type:"Savings Account"},

    {accountNo:"44219864531", 
    openedDate:"12/06/2020",
    ownerID:"U0001",
    lTransactionDate:"22/10/2020",
    branchName:"Malabe",
    balance:"2500000",
    type:"Current Account"},

    {accountNo:"54241454875", 
    openedDate:"12/06/2020",
    ownerID:"U0001",
    lTransactionDate:"22/10/2020",
    branchName:"Malabe",
    balance:"1000000",
    type:"Current Account"},
  ]

  transactions = [
    {transactionID:"TRAN001",
    sAccount:"15423168775",
    rAccount:"24572368451",
    ammount:"1000"},
    {transactionID:"TRAN002",
    sAccount:"38687795512",
    rAccount:"15423168775",
    ammount:"1000"},
    {transactionID:"TRAN003",
    sAccount:"15423168775",
    rAccount:"24572368451",
    ammount:"1000"},
    {transactionID:"TRAN004",
    sAccount:"44219864531",
    rAccount:"8687795512",
    ammount:"1000"},
    {transactionID:"TRAN005",
    sAccount:"15423168775",
    rAccount:"44219864531",
    ammount:"1000"},
    {transactionID:"TRAN006",
    sAccount:"24572368451",
    rAccount:"15423168775",
    ammount:"1000"},
    {transactionID:"TRAN007",
    sAccount:"24572368451",
    rAccount:"15423168775",
    ammount:"1000"},
    {transactionID:"TRAN008",
    sAccount:"15423168775",
    rAccount:"38687795512",
    ammount:"1000"},
    {transactionID:"TRAN009",
    sAccount:"24572368451",
    rAccount:"44219864531",
    ammount:"1000"},
    {transactionID:"TRAN0010",
    sAccount:"44219864531",
    rAccount:"24572368451",
    ammount:"1000"},
    {transactionID:"TRAN0011",
    sAccount:"54241454875",
    rAccount:"24572368451",
    ammount:"1000"},
    {transactionID:"TRAN0012",
    sAccount:"38687795512",
    rAccount:"54241454875",
    ammount:"1000"},
    {transactionID:"TRAN0013",
    sAccount:"44219864531",
    rAccount:"54241454875",
    ammount:"1000"},
    {transactionID:"TRAN0014",
    sAccount:"15423168775",
    rAccount:"54241454875",
    ammount:"1000"},
  ]
  
  userAccounts = []
  accTransactions = []
 public getAllAccounts() {
  this.userAccounts = [] 
  for (let acc of this.account) {
    if (acc.ownerID == this.isSessionUserNo) {
      this.userAccounts.push(acc)
    }
  }
  return this.userAccounts;
 }

 public getSpecificAccount(accNo) {
  for (let acc of this.account) {
    if (acc.accountNo == accNo) {
      return acc
    }
  }
 }

 public getAllTransactions(accNo) {
  this.accTransactions = [] 
  console.log(this.transactions)
  for (let tran of this.transactions) {
    
    if (tran.sAccount == accNo) {
      this.accTransactions.push(tran)
    } else if (tran.rAccount == accNo) {
      this.accTransactions.push(tran)
    }
  }
  console.log(this.accTransactions)
  return this.accTransactions;
 }

 isAuthenticated = false;
 isSessionUserName = "";
 isSessionUserNo = "U0001";

 public authenticateLogin(num, pass) {
   console.log(num + " " + pass)
   for (let log of this.login) {
      if ((log.username == num) && (log.password == pass)) {
        this.isAuthenticated = true;
        for (let user of this.Users) {
          if ((user.username == num)) {
            this.isSessionUserName = user.fullname
            this.isSessionUserNo = user.userID
          }
        }
        this.router.navigate(['/dashboard']);
      }
   }
 }
}
