import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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



  upVote(like:boolean){
    this.quote.showUpVote=this.quote.showUpVote+1
  }

  downVote(dislike: boolean) {
    this.quote.showDownVote=this.quote.showDownVote+1

  }
  constructor() { }

  ngOnInit(): void {
  }

}
