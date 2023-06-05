import { styled } from "styled-components";
import CardPc from "../components/CardPcTablet";
import { Mobile, Pc, Tablet } from "../hooks/MediaQuery";
import HomePc from "../pages/Home/HomePc";
import HomeTablet from "../pages/Home/HomeTablet";
import HomeMobile from "../pages/Home/HomeMobile";

function Home() {
  return (
    <>
      <Pc>
        <HomePc />
      </Pc>
      <Tablet>
        <HomeTablet />
      </Tablet>
      <Mobile>
        <HomeMobile />
      </Mobile>
    </>
  );
}
export default Home;
