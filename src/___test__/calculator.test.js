import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculation validation:', () => {
  test('Calculator should render', () => {
    const { container } = render(<Calculator />);
    const calcBox = container.querySelector('.calc-box');

    expect(calcBox).toBeInTheDocument();
  });
});

describe('Creating Snapshot for Calculator', () => {
  it('calculator should crete a snapshot correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
