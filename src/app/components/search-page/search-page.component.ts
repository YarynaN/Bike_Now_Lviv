import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  searchConfig = {
    ...environment.algolia,
    indexName: 'qwe'
  }

  showResults = false;

  constructor(private authService: AuthService) { }

  searchChanged(query) {
    if (query.length) {
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }
}

