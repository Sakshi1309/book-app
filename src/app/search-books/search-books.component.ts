import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SearchBooksService } from './search-books.service';

@Component({
    selector: 'search-books',
    templateUrl: './search-books.component.html',
    styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

    bookForm: FormGroup;
    searchResults: any[];

    constructor( private fb: FormBuilder, private searchBooksService: SearchBooksService) {}

    ngOnInit() {
        this.bookForm = this.fb.group({
            searchBy: ["", Validators.required]
        })
    }

    onSubmit() {
        if(this.bookForm.invalid) {

        } else {
            this.searchBooksService.searchBooks(this.bookForm.value.searchBy)
            .subscribe((res) => {
             this.searchResults = res.json().items;
             console.log(this.searchResults);   
            })
        }
    }
}
