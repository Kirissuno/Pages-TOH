import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Strange' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Nightcrawler' },
  { id: 4, name: 'Spider-Man' },
  { id: 5, name: 'Captain America' },
  { id: 6, name: 'Black Panther' },
  { id: 7, name: 'Hulk' },
  { id: 8, name: 'Iron Man' },
  { id: 9, name: 'Logan' },
  { id: 10, name: 'Deadpool' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}