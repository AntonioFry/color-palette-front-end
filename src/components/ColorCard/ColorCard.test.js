import React from 'react';
import { ColorCard } from './ColorCard';
import { shallow } from 'enzyme';

describe('ColorCard', () => {
  
  describe('ColorCard component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
      props = {
        hexValue: '#ffffff',
        key: 1,
        id: 1
      }
      wrapper = shallow(<ColorCard hexValue={props.hexValue} key={props.key} id={props.id}/>)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

})