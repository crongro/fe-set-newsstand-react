import {useContext} from "react";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import Header from "../components/Header";
import {NewsContext} from "../components/News";

const Card = () => {
  const {companyState, companyDispatch} = useContext(NewsContext);
  const selectedId = companyState.selectedCompany.id;
  
  const handleClickNext = () => companyDispatch({type:"next"});
  const handleClickPrev = () => companyDispatch({type:"prev"});
  
  return (
    <>
      <Header handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
      <SideBar
        companyList={companyState.companyList} selectedId={selectedId}/>
      <Body {...companyState.selectedCompany}/>
    </>
  );
}

export default Card;