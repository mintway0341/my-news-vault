import { useState } from "react";
import { styled } from "styled-components";
import profileImg from "../assets/ProfileImg.png";
import searchBlueImg from "../assets/SearchBlue.svg";
import searchImg from "../assets/Search.svg";
import logoPcImg from "../assets/LogoPC.svg";
import logoMobileImg from "../assets/LogoMobile.svg";
import { useNavigate } from "react-router-dom";
import LoginBtnPcTablet from "./LoginBtn/LoginBtnPcTablet";
import LogoutBtnPcTablet from "./LogoutBtn/LogoutBtnPcTablet";

function HeaderPc({ isPc }) {
  const menus = ["정치", "경제", "IT/기술", "연예", "스포츠"];
  const [selectedMenu, setSelectedMenu] = useState("정치");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const onMenuTextClickHandler = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <>
      <MainContainer>
        <TopContainer>
          <LogoContainer
            onClick={() => {
              navigate("/");
            }}
            ispc={isPc ? "true" : "false"}
          >
            <Logo
              src={isPc ? logoPcImg : logoMobileImg}
              ispc={isPc ? "true" : "false"}
            />
          </LogoContainer>
          <Menus>
            {menus.map((el) => (
              <MenuText
                onClick={() => {
                  onMenuTextClickHandler(el);
                  navigate("/");
                }}
                isselected={selectedMenu === el ? "true" : "false"}
              >
                {el}
              </MenuText>
            ))}
          </Menus>
          <LoginContainer ispc={isPc ? "true" : "false"}>
            {isLoggedIn ? (
              <LoggedIn>
                <LogoutBtnPcTablet
                  onClickHandler={() => {
                    setIsLoggedIn(false);
                  }}
                />
                <ProfileImg src={profileImg} />
              </LoggedIn>
            ) : (
              <LoginBtnPcTablet
                onClickHandler={() => {
                  setIsLoggedIn(true);
                }}
              />
            )}
          </LoginContainer>
        </TopContainer>
        <Line />
        <SearchContainer>
          <SearchBox isfocused={isFocused ? "true" : "false"}>
            <Input
              placeholder="검색어를 입력해주세요"
              onSelect={() => {
                navigate("/search");
              }}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
            />
            <SearchLine ishovered={isHovered ? "true" : "false"} />
            <SearchBtn
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <SearchImg src={isHovered ? searchBlueImg : searchImg} />
            </SearchBtn>
          </SearchBox>
        </SearchContainer>
      </MainContainer>
    </>
  );
}
export default HeaderPc;

const MainContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 168px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
`;
const TopContainer = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.div`
  border: 1px solid #e8e9ee;
`;
const SearchContainer = styled.div`
  height: 104px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = styled.div`
  cursor: pointer;
  width: ${(props) => (props.ispc === "true" ? "185px" : "155px")};
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  width: ${(props) => (props.ispc === "true" ? "185px" : "165px")};
  height: ${(props) => (props.ispc === "true" ? "36px" : "32px")};
`;
const Menus = styled.div`
  display: flex;
  flex-direction: row;
`;
const LoginContainer = styled.div`
  width: ${(props) => (props.ispc === "true" ? "185px" : "155px")};
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const MenuText = styled.div`
  cursor: pointer;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  margin: 0px 12px;
  padding: 0px 10px;
  color: ${(props) => (props.isselected === "true" ? "#112EBE" : "#1a2254")};
  &:hover {
    color: #112ebe;
  }
  border-bottom: ${(props) =>
    props.isselected === "true" ? "3px solid #233BB4" : "none"};
`;
const LoggedIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  /* border: 1px solid #e8e9ee; */
`;
const SearchBox = styled.div`
  width: 483px;
  height: 40px;
  background: #ffffff;
  border: ${(props) =>
    props.isfocused === "true" ? "1px solid #1A2254" : "1px solid #e8e9ee"};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 443px;
  padding-left: 15px;
  border: 0;
  border-radius: 4px;
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  color: #1a2254;
`;
const SearchLine = styled.div`
  width: 0px;
  height: 32px;
  border-right: ${(props) =>
    props.ishovered === "true" ? "1px solid #112EBE" : "1px solid #e8e9ee"};
`;
const SearchBtn = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 4px 4px 0px;
  &:hover {
    background-color: #e7eaf9;
  }
  &:active {
    background-color: #b5beed;
  }
`;
const SearchImg = styled.img`
  width: 14px;
  height: 14px;
`;
