import { styled } from "styled-components";
import logoutImg from "../../assets/Logout.svg";
import logoutBlueImg from "../../assets/LogoutBlue.svg";
import { useState } from "react";
function LogoutBtnMobile({ onClickHandler }) {
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
    </LogoutBtn>
  );
}
export default LogoutBtnMobile;
const LogoutBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
  margin-right: 11px;
`;
const LogoutImg = styled.img`
  width: 14px;
  height: 14px;
`;
