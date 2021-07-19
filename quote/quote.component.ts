import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    // new Quote("Seneca", "https://cutt.ly/PmBodIT", "Difficulties strengthen the mind, as labor does the body.", "", 0, 0),
    new Quote("STEVE BIKO", "https://cutt.ly/EmBonff", "It is better to die for an idea that will live, than to live for an idea that will die", "", 0, 0),
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
