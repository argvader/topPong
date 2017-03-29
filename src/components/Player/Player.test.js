import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

let component;

describe('Player Component: ', () => {
  beforeEach(() => {
    const player = {
      name: 'Sven',
      wins: 3
    };
    component = shallow(<Player player={ player } />);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should display name and wins', () => {
    const playa = component.find('article');
    expect(playa.html()).toEqual('<article>Sven<aside>3</aside></article>');
  });
});
