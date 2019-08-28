import React from 'react';
import { App } from './App.js';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import { addProjects, addPalettes } from '../../actions';

describe('App', () => {

  describe('App component',  () => {
    let wrapper;
    let props;

    beforeEach(() => {
      props = {
        palettes: [{}, {}]
      }
      wrapper = shallow(<App palettes={props.palettes} />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it.skip('should throw an error if componentDidMount cathces an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
    
      expect(wrapper.instance().componentDidMount()).toEqual()
    })
  
  })

  describe('mapStateToProps', () => {
    it('should return array with all palettes', () => {
      const mockStore = {
        palettes: [
          { id: 1, palette_name: 'Dog Colors' },
          { id: 2, palette_name: 'Cat Colors' },
          { id: 3, palette_name: 'Something' }
        ]
      }

      const expected =  {
        palettes:  [
          { id: 1, palette_name: 'Dog Colors' },
          { id: 2, palette_name: 'Cat Colors' },
          { id: 3, palette_name: 'Something' }
        ] 
    }

      const mappedProps = mapStateToProps(mockStore);
      expect(mappedProps).toEqual(expected);
    });
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addProjects', () => {
      
       
    });

    it('should call dispatch with addPalettes', () => {

    });
  })
})