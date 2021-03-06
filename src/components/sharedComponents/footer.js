import React from "react";
import * as styles from "./cssFolderOfSharedComponent/footer.module.css";

export default function footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.imgSection}>
          <img className={styles.footer_logo} src="/images/laptop.svg" alt="" />
        </div>
        <div className={styles.contactContainer}>
          <div className={`${styles.section} ${styles.extraSection1}`}>
            <div className={styles.h2_footer}> Team phát triển</div>
            <ul className={styles.ul_footer}>
              <li>
                <div className={styles.devMember}>Nguyễn Hữu Hùng</div>
              </li>
              <li>
                <div className={styles.devMember}>Nguyễn Đức Quang</div>
              </li>
              <li></li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.h2_footer}>Liên hệ</div>
            <ul className={styles.ul_footer}>
              <li>
                <div>
                  <span>039.308.1326</span> (Hữu Hùng)
                </div>
              </li>
              <li>
                <div>
                  <span>096.484.9119</span> (Đức Quang)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
