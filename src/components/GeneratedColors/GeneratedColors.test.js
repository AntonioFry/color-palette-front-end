import React from 'react';
import { shallow } from 'enzyme';
import { GeneratedColors } from './GeneratedColors';
import { setCurrentColors } from '../../actions';

describe('GeneratedColors', () => {

  describe('GeneratedColors component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
      props = {
        palettes: [
          {}
        ],
        currentColors: [
          {}
        ]
      }
      wrapper = shallow(<GeneratedColors />)
    })

    
  })

})