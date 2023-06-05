import { useState } from "react";
import { styled } from "styled-components";
import personImg from "../assets/person.svg";
import logoutImg from "../assets/Logout.svg";
import profileImg from "../assets/ProfileImg.png";
import searchImg from "../assets/Search.svg";
import arrowDownImg from "../assets/ArrowDown.svg";
import logoMobileImg from "../assets/LogoMobile.svg";
import { useNavigate } from "react-router-dom";

function HeaderMobile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <TopContainer>
          <LogoContainer
            onClick={() => {
              navigate("/");
            }}
          >
            <Logo src={logoMobileImg} />
          </LogoContainer>
          <MiddleContainer>
            <CategoryContainer>
              <CategoryText>카테고리</CategoryText>
              <ArrowDownImage src={arrowDownImg} />
            </CategoryContainer>
            <LoginContainer>
              {isLoggedIn ? (
                <LoggedIn
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  <LogoutBtn>
                    <LogoutImg src={logoutImg} />
                  </LogoutBtn>
                  <ProfileImg src={profileImg} />
                </LoggedIn>
              ) : (
                <LoggedOut
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  <PersonImg src={personImg} />
                </LoggedOut>
              )}
            </LoginContainer>
          </MiddleContainer>
        </TopContainer>
        <Line />
        <SearchContainer>
          <SearchBox>
            <Input
              placeholder="검색어를 입력해주세요"
              onSelect={() => {
                navigate("/search");
              }}
            />
            <SearchLine />
            <SearchBtn>
              <SearchImg src={searchImg} />
            </SearchBtn>
          </SearchBox>
        </SearchContainer>
      </MainContainer>
    </>
  );
}
export default HeaderMobile;

const MainContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 204px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
`;
const TopContainer = styled.div`
  height: 116px;
  display: flex;
  flex-direction: column;
`;
const MiddleContainer = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.div`
  border: 1px solid #e8e9ee;
`;
const SearchContainer = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = styled.div`
  cursor: pointer;
  margin-top: 16px;
  margin-left: 16px;
`;
const Logo = styled.img`
  width: 165px;
  height: 32px;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;
const CategoryText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1a2254;
  margin-right: 14px;
`;
const ArrowDownImage = styled.img`
  width: 12px;
  height: 7.28px;
`;
const LoginContainer = styled.div`
  width: 150px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const LoggedIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const LogoutBtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoutImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 11px;
`;
const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  /* border: 1px solid #e8e9ee; */
`;
const LoggedOut = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 38px;
  height: 38px;
  border: 1px solid #1a2254;
  border-radius: 4px;
`;
const PersonImg = styled.img`
  width: 10.8px;
  height: 10.8px;
`;
const SearchBox = styled.div`
  width: 100%;
  margin: 0px 16px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e8e9ee;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
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
  border-left: 1px solid #e8e9ee;
`;
const SearchBtn = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchImg = styled.img`
  width: 14px;
  height: 14px;
`;
