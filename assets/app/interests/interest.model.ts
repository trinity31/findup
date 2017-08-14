export class Interest {
    content: string;
    type: string;
    interestId?: string;
    userId?: string;

    constructor(content:string, type:string, interestId?:string, userId?:string) {
        this.content = content;
        this.type = type;
        this.interestId = interestId;
        this.userId = userId;
    }
}