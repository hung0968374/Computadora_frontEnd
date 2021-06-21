import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import * as styles from "./ItemSection.module.css";
import WaitingScreen from "../../pages/WaitingScreen";

export default function ItemSection({ allData }) {
  const [loading, setLoading] = useState(false);
  const [seeMore, setSeeMore] = useState(20);

  //handle
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleSeeMoreEvent = () => {
    setLoading(true);
    setSeeMore(seeMore + 20);
    setLoading(false);
  };
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.items}>
            {allData.slice(0, seeMore).map((data) => (
              <Item data={data} key={data._id} />
            ))}

            <div className={styles.item1}>
              {loading ? (
                <WaitingScreen />
              ) : (
                <button
                  onClick={handleSeeMoreEvent}
                  className={styles.display_more}
                >
                  Xem thêm
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
