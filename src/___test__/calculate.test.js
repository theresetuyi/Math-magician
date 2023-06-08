import renderer from 'react-test-renderer';
import calculate from '../logic/calculate';
import Calculator from '../components/calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Test calculate', () => {
  it('6 + 4 = 10', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '+',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('10');
  });

  it('6 - 4 = 2', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });

  it('6 x 4 = 24', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: 'x',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('24');
  });

  it('6 ÷ 4 = 1.5', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '÷',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('1.5');
  });

  it('6 % 4 = 2', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '%',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });
});
describe('Component UI render as expected', () => {
  it('Calculator renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
