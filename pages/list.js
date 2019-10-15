import {useContext} from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import ListViewMenu from "../components/ListViewMenu";
import {NewsContext} from "../components/News";
import useGruopIndex from "../hooks/useGroupIndex";

const List = () => {
  const {companyState} = useContext(NewsContext);
  const {companyList, selectedCompany} = companyState;
  
  const { groupIndex, changeListGroupIndex, offset } = useGruopIndex(companyList);
  const splitedList = companyList.slice(groupIndex * offset, groupIndex * offset + offset); 
  const selectedId = selectedCompany.id;  
  
  const handleClickNext = () => changeListGroupIndex(groupIndex + 1);
  const handleClickPrev = () => changeListGroupIndex(groupIndex - 1);

  return (
    <>
      <Header handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
      <ListViewMenu companyList={splitedList} selectedId={selectedId}/>
      <Body {...companyState.selectedCompany}/>
    </>
  );
}

export default List;