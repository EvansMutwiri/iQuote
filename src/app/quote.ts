export class Quote {
    showQuotes: boolean;
    constructor(public author: string, public image: string, public theirQuotes: string, public name: string, public showUpVote: number, public showDownVote: number) {
        this.showQuotes = false;
    }
}
