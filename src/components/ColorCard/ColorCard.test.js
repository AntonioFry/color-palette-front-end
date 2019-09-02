import React from 'react';
import { ColorCard } from './ColorCard';
import { lockingColor } from '../../actions';
import { shallow } from 'enzyme';
import { mapDispatchToProps } from './ColorCard';

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

  describe('mapDispatchToProps', () => {
    it('should dcall dispatch with currentColors', () => {
      const mockId = 1;
      const mockDispatch = jest.fn();
      const actionToDispacth = lockingColor(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.lockingColor(mockId)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispacth)
    })
  })

})