import footerContent from "../../Api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";


export const Footers = () => {
  
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer_section">
      <div className="container grid grid-three-cols">
        {footerContent.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-content" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-content-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

        <div className="copyright-area">
        <div className="copyright-text">
            <p>
                Copyright &copy; 2025, All Right Reserved
            </p>
        </div>
        </div>
    </footer>
  );
};
