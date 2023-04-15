import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-icon-button',
  templateUrl: './random-icon-button.component.html',
  styleUrls: ['./random-icon-button.component.css']
})

export class RandomIconButtonComponent implements OnInit{
  currentIcon: string | undefined;
  buttonDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
    this.currentIcon = 'fas fa-random';
  }

  showRandomIcon() {
    this.buttonDisabled = true;
    console.log('clicked')
    setTimeout(() => {
      this.currentIcon = this.getRandomIcon();
      this.buttonDisabled = false;
      console.log('waiting on click');
    }, 3000);
  }

  getRandomIcon() {
    const icons = [
      'fas fa-cat',
      'fas fa-dog',
      'fas fa-fish',
      'fas fa-horse',
      'fas fa-kiwi-bird',
      'fas fa-otter',
      'fas fa-spider',
      'fas fa-hippo',
      'fas fa-kiwi-bird',
      'fas fa-dragon'
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  }
}


  

