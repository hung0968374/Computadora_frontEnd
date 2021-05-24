import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import * as styles from "./cssFolderOfSharedComponent/scrolling.module.css";

export default function ScrollToTop() {
  const [renderGotoTopBtn, setRenderGotoTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setRenderGotoTopBtn(true);
      } else {
        setRenderGotoTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log("ren", renderGotoTopBtn);
  return (
    <>
      {renderGotoTopBtn && (
        <div
          className={`${styles.scrollContainer} 
       
        `}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        >
          <FaAngleUp size={40} />
        </div>
      )}
    </>
  );
}
