export function companyReducer(state, action) {
    const {companyList, selectedCompany} = state;
    const {index} = selectedCompany;

    switch (action.type) {
      case "select": 
        return {
          ...state,
          selectedCompany : {...action.company}
        };
      case 'next':
        return companyList[index + 1]? {
          ...state,
          selectedCompany : {...companyList[index + 1]}
        } : state;
      case 'prev':
        return companyList[index - 1] ? {
          ...state,
          selectedCompany : {...companyList[index - 1]}
        } : state;
      default:
        throw new Error();
    }
  }
