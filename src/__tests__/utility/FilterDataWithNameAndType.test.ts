import { filterDataWithTypeAndName } from "../../utility/FilterDataWithTypeAndName";


describe('filter crickter data with name and type', () => {
  it('returns true for data matching with given condition', () => {
    expect(filterDataWithTypeAndName(['a','b','c'],'b',"Ravindra","rav")).toBe(true);
  });
  it('returns false for data not matching with given condition', () => {
    expect(filterDataWithTypeAndName(['a','b','c'],'d',"Ravindra","cz")).toBe(false);
    expect(filterDataWithTypeAndName(['a','b','c'],'d',"Ravindra","rav")).toBe(false);
    expect(filterDataWithTypeAndName(['a','b','c'],'b',"Ravindra","cz")).toBe(false);
  });
});