import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import * as styles from "./itemSection.module.css";

export default function item_section({ allData, setAllData }) {
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.sort_bar}></div>
          <div className={styles.items}>
            {allData.map((data) => (
              <Item data={data} />
            ))}

            <div className={styles.item1}>
              <div>
                <Link>0</Link>
              </div>
              <div>
                <Link>0</Link>
              </div>
              <div>
                <Link>1</Link>
              </div>
              <div>
                <Link>2</Link>
              </div>
              <div>
                <Link>3</Link>
              </div>
              <div>
                <Link>4</Link>
              </div>
              <div>
                <Link>5</Link>
              </div>
              <div>
                <Link>6</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
