import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: any;
  @Output() isComplete = new EventEmitter<boolean>();
  doneWithQuote(Delete: boolean) {
    this.isComplete.emit(Delete);
  }

  @Output() isUpVote = new EventEmitter<boolean>();
  @Output() isDownVote = new EventEmitter<boolean>();

  upVote(like: boolean) {
    this.isUpVote.emit(like);
  }

  downVote(dislike: boolean) {
    this.isDownVote.emit(dislike);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
