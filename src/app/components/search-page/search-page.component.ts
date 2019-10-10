import { Component, OnInit } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'L0RIMQ3N9M',
  'd46d47318500059ef7e4a90ece2b341b'
);

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  config = {
    indexName: 'bicycles',
    searchClient,
    routing: true
  }
}

