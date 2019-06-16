import React from 'react';
import toJson from 'enzyme-to-json';

import Test from './index';

/* global mount, jest */
describe('<Test />', () => {
    it('should render wrapper', () => {
        const wrapper = mount(<Test className="test-1" />);

        expect(wrapper.find('.test-1').exists()).toBeTruthy();
        wrapper.unmount();
    });

    it('should matches the snapshot', () => {
        const wrapper = mount(
            <Test />
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
