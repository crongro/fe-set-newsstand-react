import React, {useContext, useMemo} from 'react';
import styled from 'styled-components';
import {NewsContext} from "../News";

const StyledLi = styled.li`
  padding : 2px 0px 2px;
  cursor: pointer;
  color: ${props => props.isSelected ? "#18d818" : "#393939"};
  font-size: ${props => props.isSelected ? "21px" : "17px"};
  font-weight: ${props => props.isSelected ? "900" : "100"};
`

const CompanyItem = ({ company, isSelected }) => {
  const {companyDispatch} = useContext(NewsContext); 
  const handleClick = () => companyDispatch({type:"select", company});

  const StyledItem = useMemo(() => {
    return (
      <StyledLi onClick={handleClick} isSelected={isSelected}>
        {company.company}
      </StyledLi>
    );

  }, [isSelected])

  return StyledItem;

}

export default CompanyItem;