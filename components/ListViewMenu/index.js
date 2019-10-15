import React, {useCallback} from 'react';
import LogoButtonRenderer from "./LogoButton";

const ListViewMenu = ({companyList, selectedId}) => {
  const logoList = useCallback(makeListViewMenu(companyList, selectedId),  [companyList]);

  return <div>{logoList}</div>;
}

const makeListViewMenu = (companyList, selectedId) => {
  return companyList.map((company) => LogoButtonRenderer(company, selectedId));
}


export default ListViewMenu;