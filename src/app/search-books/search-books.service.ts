import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class SearchBooksService {

    constructor( private http: Http ) {}

    private apiPath = "https://www.googleapis.com/books/v1/volumes";

    public searchBooks(query) {
        let urlSearchParams: URLSearchParams = new URLSearchParams();
        urlSearchParams.set("q", query);
        return this.http.get(this.apiPath, {
            search: urlSearchParams
        });
    }
}
