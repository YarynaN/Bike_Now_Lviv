import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  slides = [
    { image: '../../../assets/img/client1.png', name: 'Igor Zinko', position: 'CEO',
      text: '"If you want to ride a bicycle but you don`t have one – BikeNow is the best place to rent any bike you want."'},
    { image: '../../../assets/img/client2.png', name: 'Arthur Petrenko', position: 'Art-director',
      text: '" Me and my wife been to Lviv on 3 days trip. We always wish to travel and like to dig deep inside the local culture ' +
        'and traditions. We rented bikes using this service and it helped us to see much more."'},
    { image: '../../../assets/img/client3.png', name: 'Max Yablonskiy', position: 'Global research analists',
      text: '"I love riding a bikes but I do not own one that is why I am using BikeNow, it is super easy to rent a bike for a day' +
        ' or even more if you want to! "'},
    { image: '../../../assets/img/client4.png', name: 'Bohdan Kostyuk', position: 'Software Developer',
      text: '"This service is bringing me a lot of money as I use it to share my bicycle with other people for money. ' +
        'I am thinking of buying a few bikes for renting purposes."'},
    { image: '../../../assets/img/client5.png', name: 'Stepan Voytenko', position: 'Musician', text: '" The bike from this bike sharing' +
        ' service was good and the rates were very reasonable. "'}
    ];
  constructor() { }
  ngOnInit() { }
}
