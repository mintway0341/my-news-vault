import { styled } from "styled-components";
import CardPc from "../../components/CardPcTablet";
import thumb1Img from "../../assets/Thumb1.png";
import thumb2Img from "../../assets/Thumb2.png";
import jtbcLogoImg from "../../assets/JtbcLogo.png";

function HomePc() {
  return (
    <MainContainer>
      <HiddenBox />
      <CardsContainer>
        {Array(4).fill(
          <>
            <CardPc
              thumbnailSrc={thumb1Img}
              logoSrc={jtbcLogoImg}
              title="괌에 발 묶였던 188명 귀국"
              desc="태풍 '마와르'가 괌을 휩쓸면서 발이 묶였던 한국인 관광객 3400여 명 가운데 일부가 귀가했습니다."
              date="2023. 05. 30"
            />
            <CardPc
              thumbnailSrc={thumb2Img}
              logoSrc={jtbcLogoImg}
              title="AAAAAAAAAAAAAAAAAA"
              desc="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              date="2023. 05. 30"
            />
          </>
        )}
      </CardsContainer>
    </MainContainer>
  );
}
export default HomePc;
const MainContainer = styled.div`
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HiddenBox = styled.div`
  height: 168px;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 231px);
  grid-gap: 36px 20px;
`;
