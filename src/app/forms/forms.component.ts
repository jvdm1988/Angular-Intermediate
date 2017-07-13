import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  theUser: any = {};
  emailMessage: string = "";
  passwordMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  handleTheSubmission() {
    // no blanks
    if (!this.theUser.fakeEmail) {
      this.emailMessage = "Please provide your email";
    }
    else if (this.theUser.fakeEmail.includes("@") === false) {
      this.emailMessage = "Please provide an actual email address";
    }
    else {
      // clear the message if you pass validation
      this.emailMessage = "";
  }

  // no blanks
  if (!this.theUser.fakePassword) {
    this.passwordMessage = "Please provide your password";
  }
  // can't be swordfish
  else if (this.theUser.fakePassword === "swordfish") {
      this.passwordMessage = "Don\'t be a dummy. Don\'t use 'swordfish'.";
  }
  // password exactly 3 characters
  else if (this.theUser.fakePassword !== 3) {
      this.passwordMessage = "Password must have exactly 3 characters";
  }
  // no caps
  else if (this.theUser.fakePassword !== this.theUser.fakePassword.toLowerCase()) {
      this.passwordMessage = "No capital letters, please.";
  }
  // no numbers
  else if (/[0-9]/.test(this.theUser.fakePassword) === true){
    this.passwordMessage = "No numbers, please";
  }
  // need symbols
  else if (/[^0-9A-Za-z]/.test(this.theUser.fakePassword) === false){
    this.passwordMessage = "Your password needs symbols";
  }
  else {
    this.passwordMessage = "";
  }
}
}
