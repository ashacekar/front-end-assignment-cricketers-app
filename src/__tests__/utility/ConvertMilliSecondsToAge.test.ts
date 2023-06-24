import { convertMilliSecondsToAge } from '../../utility/ConvertMilliSecondsToAge';

describe('check milliseconds to age conversion', () => {
  it('returns correct age', () => {
    expect(convertMilliSecondsToAge(594691200000)).toBe(18);
  });
});