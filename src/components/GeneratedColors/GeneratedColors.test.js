import React from 'react';
import { shallow } from 'enzyme';
import { GeneratedColors } from './GeneratedColors';
import { setCurrentColors } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './GeneratedColors';

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

  describe('mapStateToProps', () => {
    it('should return an array of palettes', () => {
      const mockStore = {
        palettes: [
          { id: 1, palette_name: 'Dog Colors' },
          { id: 2, palette_name: 'Cat Colors' },
          { id: 3, palette_name: 'Something' }
        ]
      }

      const expected = {
        palettes: [
          { id: 1, palette_name: 'Dog Colors' },
          { id: 2, palette_name: 'Cat Colors' },
          { id: 3, palette_name: 'Something' }
        ]
      }

      const mappedProps = mapStateToProps(mockStore);
      expect(mappedProps).toEqual(expected);
    });

    it('should return an array of currentColors', () => {
      const mockStore = {
        currentColors: [
          { id: 1, locked: false, newColor: '#FFFFFF' },
          { id: 2, locked: false, newColor: '#FFFFFF' },
          { id: 3, locked: false, newColor: '#FFFFFF' },
          { id: 4, locked: false, newColor: '#FFFFFF' },
          { id: 5, locked: false, newColor: '#FFFFFF' },
        ]
      }

      const expected = {
        currentColors: [
          { id: 1, locked: false, newColor: '#FFFFFF' },
          { id: 2, locked: false, newColor: '#FFFFFF' },
          { id: 3, locked: false, newColor: '#FFFFFF' },
          { id: 4, locked: false, newColor: '#FFFFFF' },
          { id: 5, locked: false, newColor: '#FFFFFF' },
        ]
      }

      const mappedProps = mapStateToProps(mockStore);
      expect(mappedProps).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setCurrentColors', () => {
      const currentColors = {
        currentColors: [
          { id: 1, locked: false, newColor: '#FFFFFF' },
          { id: 2, locked: false, newColor: '#FFFFFF' },
          { id: 3, locked: false, newColor: '#FFFFFF' },
          { id: 4, locked: false, newColor: '#FFFFFF' },
          { id: 5, locked: false, newColor: '#FFFFFF' },
        ]
      }
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrentColors(currentColors);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentColors(currentColors);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

})