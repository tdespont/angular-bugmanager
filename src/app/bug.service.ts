import { Injectable } from '@angular/core';
import { Bug } from './bug';

const bugs: Bug[] = [{
  id: 0,
  title: 'un titre de bug 0',
  description: 'ceci est la description du bug 0.'
}, {
  id: 1,
  title: 'un titre de bug 1',
  description: 'ceci est la description du bug 1.'
}, {
  id: 2,
  title: 'un titre de bug 2',
  description: 'ceci est la description du bug 2.'
}];


@Injectable()
export class BugService {

  constructor() { }

  getBug(id: number): Bug {
    return bugs[id];
  }

  findBug(searchItem: String): Bug[] {
    return bugs;
  }

}

