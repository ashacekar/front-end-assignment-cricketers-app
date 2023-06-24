  export const filterDataWithTypeAndName = (filters: String[],type: String, name: String, nameSearch: String) => {
    return filters.includes(type) && (name.toLowerCase() === nameSearch.toLowerCase() || name.toLowerCase().includes(nameSearch.toLowerCase() as string));
  }