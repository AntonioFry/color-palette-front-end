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
      wrapper = shallow(<GeneratedColors {...props} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call setCurrentColors when componentDidMount is called', () => {
      wrapper.instance().componentDidMount();
      expect(props.setCurrentColors).toHaveBeenCalled()
    })

    it('should setCurrentColors when generatedNewPalette is called', () => {
      wrapper.instance().generateNewPalette();
      expect(props.setCurrentColors).toHaveBeenCalled()
    })
  })

})