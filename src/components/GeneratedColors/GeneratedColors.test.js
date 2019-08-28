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
        ],
        setCurrentColors: jest.fn()
      }
      wrapper = shallow(<GeneratedColors
        currentColors={props.currentColors}
        palettes={props.palettes}
        setCurrentColors={props.setCurrentColors}
      />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

})