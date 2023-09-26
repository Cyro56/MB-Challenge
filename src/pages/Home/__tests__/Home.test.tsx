import React from 'react';
import {Home} from '../Home';
import {render} from '@testing-library/react-native';

describe('Home component', () => {
  it('should render Home component', () => {
    render(<Home />);
  });
  it('Should match MBLabs string', () => {
    const {getByText} = render(<Home />);

    const mbString = getByText('Hello, MB Labs!');
    expect(mbString).toBeTruthy();
  });
});
