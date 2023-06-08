import { styled } from "styled-components";
import logoutImg from "../../assets/Logout.svg";
import logoutBlueImg from "../../assets/LogoutBlue.svg";
import { useState } from "react";
function LogoutBtnPcTablet({ onClickHandler }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <LogoutBtn
      onClick={onClickHandler}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <LogoutImg src={isHovered ? logoutBlueImg : logoutImg} />
      로그아웃
    </LogoutBtn>
  );
}
export default LogoutBtnPcTablet;
const LogoutBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-size: 13px;
  line-height: 0.3;
  color: #484e76;
  margin-right: 24px;
  &:hover {
    color: #112ebe;
  }
  &:active {
    color: #112ebe;
  }
`;
const LogoutImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 7px;
`;
