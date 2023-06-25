import { convertCamelCaseToTitleCase } from '../../utility/ConvertCamelCaseToTitleCase';
import { convertMilliSecondsToAge } from '../../utility/ConvertMilliSecondsToAge';

describe('check camel case to title case', () => {
  it('returns correct title case', () => {
    expect(convertCamelCaseToTitleCase("batsman")).toBe("Batsman");
    expect(convertCamelCaseToTitleCase("bowler")).toBe("Bowler");
    expect(convertCamelCaseToTitleCase("allRounder")).toBe("All Rounder");
    expect(convertCamelCaseToTitleCase("")).toBe("");
  });
});