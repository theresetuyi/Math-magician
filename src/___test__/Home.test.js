import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home validation:', () => {
  test('Home should be render', () => {
    const { container } = render(<Home />);
    const mainElement = container.querySelector('main');

    expect(mainElement).toBeInTheDocument();
  });
});

describe('Home validation:', () => {
  test('p have class welcome should be present', () => {
    const { container } = render(<Home />);
    const pElement = container.querySelector('.welcome');

    expect(pElement).toBeInTheDocument();
  });
});

describe('Creating Snapshot for Home', () => {
  it('Home should crete a snapshot correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
