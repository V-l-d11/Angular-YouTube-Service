export class Page{
    public totlaCount: number;
    public rows: Array<any>;

    constructor(totalCount:number, rows: Array<any>) {
        this.totlaCount = totalCount;
        this.rows = rows; 
    }
}