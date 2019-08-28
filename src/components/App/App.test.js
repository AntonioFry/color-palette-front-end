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
      const projects = [
        { id: 1, name: 'Dog Party' },
        { id: 2, name: 'Cat Party' },
        { id: 3, name: 'Something' }
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = addProjects(projects);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProjects(projects);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with addPalettes', () => {
      const palettes = [
        { id: 1, palette_name: 'Dog Colors' },
        { id: 2, palette_name: 'Cat Colors' },
        { id: 3, palette_name: 'Something' }
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = addPalettes(palettes);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPalettes(palettes);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})