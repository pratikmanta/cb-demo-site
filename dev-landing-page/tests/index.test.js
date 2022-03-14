import React from 'react';
import { shallow } from 'enzyme';
import { Root } from '../modules/Root/root';

describe('Root component is being rendered', () => {
	let shallowWrapper;

	beforeAll(() => {
		shallowWrapper = shallow(<Root />);
	});

	it('should not return an error', () => {
		expect(shallowWrapper).toMatchSnapshot();
		console.log(shallowWrapper.debug());
	});
});
