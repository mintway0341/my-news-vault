import { styled } from "styled-components";
import searchImg from "../../assets/Search.svg";
import errorImg from "../../assets/Error.svg";
import noneImg from "../../assets/None.svg";
import { useState } from "react";

function SearchMobile() {
  const [status, setStatus] = useState(0); // 여기를 0, 1, 2, 3으로 바꾸시면 순서대로 검색전/검색후/오류/결과없음 화면 보입니다.

  return (
    <MainContainer>
      <HiddenBox />
      {status === 0 ? (
        <Container>
          <CircleWhite>
            <SearchImg src={searchImg} />
          </CircleWhite>
          <Text>검색어를 입력해주세요.</Text>
        </Container>
      ) : null}

      {status === 1 ? (
        <Container>
          <CircleWhite />
          <Text>검색중...</Text>
        </Container>
      ) : null}

      {status === 2 ? (
        <Container>
          <CirclePink>
            <ErrorImg src={errorImg} />
          </CirclePink>
          <Text>로드 중 문제가 발생하였습니다.</Text>
        </Container>
      ) : null}

      {status === 3 ? (
        <Container>
          <CircleWhite>
            <NoneImg src={noneImg} />
          </CircleWhite>
          <Text>검색 결과가 없습니다.</Text>
        </Container>
      ) : null}
    </MainContainer>
  );
}
export default SearchMobile;
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HiddenBox = styled.div`
  height: 100px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 41px;
  color: #1a2254;
  margin-top: 36px;
`;
const CircleWhite = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CirclePink = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  background: #ffefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchImg = styled.img`
  width: 40.6px;
  height: 40.6px;
`;
const ErrorImg = styled.img`
  width: 46.4px;
  height: 46, 4px;
`;
const NoneImg = styled.img`
  width: 67.11px;
  height: 58.11px;
`;
