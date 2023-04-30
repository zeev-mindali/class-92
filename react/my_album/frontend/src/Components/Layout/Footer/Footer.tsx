import "./Footer.css";
import CopyRights from "./CopyRights/CopyRights";
import Summary from "./Summary/Summary";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <div className="copyRight">
        <CopyRights />
      </div>
      <div className="summary">
        <Summary />
      </div>
    </div>
  );
}

export default Footer;
