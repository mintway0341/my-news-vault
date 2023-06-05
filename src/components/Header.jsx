import { Mobile, Pc, Tablet } from "../hooks/MediaQuery";
import HeaderMobile from "./HeaderMobile";
import HeaderPc from "./HeaderPcTablet";

function Header() {
  return (
    <>
      <Pc>
        <HeaderPc isPc={true} />
      </Pc>
      <Tablet>
        <HeaderPc isPc={false} />
      </Tablet>
      <Mobile>
        <HeaderMobile />
      </Mobile>
    </>
  );
}
export default Header;
