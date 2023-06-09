import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Creating Snapshot for Quote', () => {
  it('Quote should renders correctly', () => {
    const tree = renderer
      .create(<Quote category="computers" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
