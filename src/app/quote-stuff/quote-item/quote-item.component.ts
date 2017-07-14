import { Component, OnInit, Input } from '@angular/core';
// import decorator is needed extra

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  // quoteInfo will be set by the parent when the component is displayed
  @Input() quoteInfo: object;

  constructor() { }

  ngOnInit() {
  }

}
