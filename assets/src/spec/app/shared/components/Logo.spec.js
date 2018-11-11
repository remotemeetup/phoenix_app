import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../../app/shared/components';

describe('<Logo />', () => {
  const wrapper = shallow(<Logo />);

  describe('rendering', () => {
    it('renders itself as <div />', () => {
      expect(wrapper.is('div')).toBe(true);
    });

    it('renders a link', () => {
      expect(wrapper.find('a').exists()).toBe(true);
    });

    it('renders an image', () => {
      expect(wrapper.find('a').find('img').exists()).toBe(true);
    });
  });
});
