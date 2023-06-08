import { styled } from "styled-components";
import personImg from "../../assets/person.svg";
import personBlueImg from "../../assets/PersonBlue.svg";
import { useState } from "react";
function LoginBtnPcTablet({ onClickHandler }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <LoggedOut
      onClick={onClickHandler}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <PersonImg src={isHovered ? personBlueImg : personImg} />
      <p>로그인</p>
    </LoggedOut>
  );
}
export default LoginBtnPcTablet;
const LoggedOut = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 98px;
  height: 38px;
  border: 1px solid #1a2254;
  border-radius: 4px;
  font-weight: 700;
  font-size: 13px;
  line-height: 0.3;
  color: #1a2254;
  &:hover {
    background-color: #e7eaf9;
    border-color: #112ebe;
    color: #112ebe;
  }
  &:active {
    background-color: #b5beed;
    border-color: #112ebe;
    color: #112ebe;
  }
`;
const PersonImg = styled.img`
  width: 10.8px;
  height: 10.8px;
`;
