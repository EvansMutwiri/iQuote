import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote("ABRAHAM LINCOLN", "https://cutt.ly/fmCPgPr", "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.", "", 0, 0),
    new Quote("HILLARY CLINTON", "https://cutt.ly/emCPYTX", "The worst thing that can happen in a democracy as well as in an individual's life is to become cynical about the future and loose hope; that is the end, and we cannot let that happen.", "", 0, 0),
    new Quote("WILLIAM SHAKESPEARE", "https://cutt.ly/8mCPPO7", "If music be the food of  love, play on.", "", 0, 0),
    new Quote("C.S LEWIS", "https://cutt.ly/dmCPJVg", " Integrity is doing the right thing even when no one is watching.", "", 0, 0),
    new Quote("LILLIAN DICKSON", "https://cutt.ly/dmCPMVz", "Life is like a coin.You spend it anyway you wish, but you only spend it once.", "", 0, 0),
  ]
  upVote(isUpVote: any, index: any) {
    this.quotes[index].upVote++;
  }

  downVote(isDownVote: any, index: any) {
    this.quotes[index].downVote++;
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }


  toggleQuotes(index: any) {
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete ${this.quotes[index].author} quotes?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }

  }

  myDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
