import { useContext } from "react";
import Link from "next/link";
import { NewsContext } from "../News";
import { HeaderWrapper, UIButtonSet, LeftButton, RightButton, MoveButtonSet } from "./HeaderStyle";


const Header = ({handleClickNext, handleClickPrev}) => {

  return (
    <HeaderWrapper>
      <UIButtonSet>
        <Link href="/card">
          <LeftButton>카드</LeftButton>
        </Link>
        <Link href="/list">
          <RightButton>목록</RightButton>
        </Link>
      </UIButtonSet>
      <MoveButtonSet>
          <LeftButton onClick={handleClickPrev}>이전</LeftButton>
          <RightButton onClick={handleClickNext}>다음</RightButton>
      </MoveButtonSet>
    </HeaderWrapper>
  );
}

export default Header;