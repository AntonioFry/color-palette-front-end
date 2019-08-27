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
  
  })
})