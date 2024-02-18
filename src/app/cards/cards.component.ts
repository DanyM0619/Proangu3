import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cards =[
    {
      title: 'Card 1',
      img: 'https://picsum.photos/200/300',
      desc: 'Descripcion1'
    },
    {
      title: 'Card 2',
      img: 'https://picsum.photos/200/300',
      desc: 'Descripcion2'
    },
    {
      title: 'Card 3',
      img: 'https://picsum.photos/200/300',
      desc: 'Descripcion 3'
    },
    {
      title: 'Card 4',
      img: 'https://picsum.photos/200/300',
      desc: 'Descripcion 4'
    }
  ]
}
