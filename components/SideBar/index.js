import React, {useContext} from 'react';
import styled from 'styled-components';
import CompanyItem from "./CompanyItem";
const StyledList = styled.ul`
  width: 200px;
  border-right: 1px solid #c5c5c5;
  list-style:none;
  margin-top: 0;
  `

const SideBar = ({companyList, selectedId}) => {
  
  const isSelected = id => selectedId === id;

  return (
    <StyledList>
      {companyList.map((company) => 
        <CompanyItem key={company.id} company={company} isSelected={isSelected(company.id)}/>
      )}
    </StyledList>
    );
}

export default SideBar;