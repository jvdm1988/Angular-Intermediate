import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter // needed to make "Output" work
  } from '@angular/core';


@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  // quoteInfo will be set by the parent when the component is displayed
  @Input() quoteInfo: any;
  @Output() onQuoteDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  // tellParentToDeleteThis() is called when the button is clicked
  tellParentToDeleteThis() {
  // when the button is clicked, notify the parent
  // emit is the thing that notifies the parent
  this.onQuoteDelete.emit(this.quoteInfo);

  }

}
