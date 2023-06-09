import operate from '../logic/operate';

describe('Tests for: Operatation + ', () => {
  it('shoule sum 1 by 2 and return 3', () => {
    const answer = operate('1', '2', '+');
    expect(answer).toBe('3');
  });
});

describe('Tests for: Operatation - ', () => {
  it('shoule  2 - 1  and return 1', () => {
    const answer = operate('2', '1', '-');
    expect(answer).toBe('1');
  });
});

describe('Tests for: Operatation X ', () => {
  it('shoule  3 x 1  and return 3', () => {
    const answer = operate('3', '1', 'x');
    expect(answer).toBe('3');
  });
});

describe('Tests for: Operatation ÷', () => {
  it('shoule  5 ÷ 0  and return Cant divide by 0', () => {
    const answer = operate('5', '0', '÷');
    expect(answer).toMatch("Can't divide");
  });
});

describe('Tests for: Operatation %', () => {
  it('should  15 % 5  and return  0', () => {
    const answer = operate('15', '5', '%');
    expect(answer).toBe('0');
  });
});
