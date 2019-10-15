
import {createContext, useReducer} from "react";
import {companyReducer} from "../reducer/companyReducer";

const News = ({companyList, children}) => {

  const initState = {
    companyList,
    selectedCompany : companyList[0]
  }

  const [companyState, companyDispatch] = useReducer(companyReducer, initState);
  
  return (
    <NewsContext.Provider value={{companyState, companyDispatch}}>
      {children} 
    </NewsContext.Provider>   
    );
  
}

export const NewsContext = createContext();
export default News;
