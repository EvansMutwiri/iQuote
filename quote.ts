export class Quote {
    showQuotes: boolean;
    constructor(public author: string, public image: string, public theirQuotes: string, public name: string, public upVote: number, public downVote: number) {
        this.showQuotes = false;
    }
}
