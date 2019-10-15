import {useContext, useCallback} from 'react';
import styled from "styled-components";
import {NewsContext} from "../News";

const LogoButton = styled.img`
  padding: 5px 10px 5px 10px;
  border-bottom: ${props=>props.selected ? "2px solid #18d818" : ""};
`
const LogoButtonRenderer = (company, selectedId) => {
  const {logoImgUrl, id} = company;
  const {companyDispatch} = useContext(NewsContext); 

  return (
  <LogoButton
    key={id}
    src={logoImgUrl}
    alt={logoImgUrl}
    selected={selectedId === id}
    onClick={()=>companyDispatch({type:"select", company})} 
    />);
}

export default LogoButtonRenderer;