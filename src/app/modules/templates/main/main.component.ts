import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public article: {title: string} | null = null;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.article = {
        title: 'Hello World'
      }
    }, 1500);
  }

}
