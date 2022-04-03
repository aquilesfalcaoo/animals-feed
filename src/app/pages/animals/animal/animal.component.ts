import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  private originalURL = '';

  @Input() description = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalURL = url;
    } else {
      this.originalURL = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.originalURL;
  }

  constructor() {}

  ngOnInit(): void {}
}
