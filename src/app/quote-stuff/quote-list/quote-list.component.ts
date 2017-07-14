import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  allTheQuotes: object[] = [
      {
        text: "You Can Discover Anything There Is To Know About Everything By Looking At Your Hands",
        author: "Jayden Smith"
      },
      {
        text: "Imagination is more important than knowledge.",
        author: "Albert Einstein"
      },
      {
        text: "If A Book Store Never Runs Out Of A Certain Book, Does That Mean That Nobody Reads It, Or Everybody Reads It",
        author: "Jayden Smith "
      }
  ];


  constructor() { }

  ngOnInit() {
  }

}
