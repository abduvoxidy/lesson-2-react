// export default function Header() {
//   return <div>Header</div>;
// }

// function Header() {
//   return <div>Header</div>;
// }

// export default Header;

import NavMenu from "./components/NavMenu";
import "./Header.css";
import axios from "axios";

const Header = () => {
  // const myFunc = () => {
  //   axios.get('url')
  // }
  return (
    <div className="header">
      <h2>Logo</h2>
      <NavMenu />
    </div>
  );
};

export default Header;
