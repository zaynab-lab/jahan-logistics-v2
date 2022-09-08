import Logo from "@/public/img/Logo";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function () {
  return (
    <>
      <div className="bar">
        <div className="wtsContainer">
          <div className="wts">
            <FaWhatsapp />
          </div>
          <div className="phoneNumbers">
            <Link href="https://wa.me/+9613751568">
              <div>+961 3 751 568</div>
            </Link>
            <Link href="https://wa.me/+989129244605">
              <div>+98 912 9244 605</div>
            </Link>
          </div>
        </div>
        <div className="contactTxt">تواصل معنا</div>
        <div className="logo">
          <Logo color={styles.primaryColor} />
        </div>
      </div>
      <style jsx>{`
        .bar {
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          color: ${styles.primaryColor};
          flex-wrap: wrap;
          padding: 1rem 2rem;
          gap: 1rem;
          border: solid ${styles.primaryColor};
          border-width: 2px 0px;
        }
        .wtsContainer {
          ${styles.flex};
          ${styles.flexBothcenter};
          gap: 0.8rem;
        }
        .wts {
          font-size: clamp(2rem, 2rem + 2vw, 4rem);
          color: ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexBothcenter};
        }
        .phoneNumbers {
          font-size: clamp(0.9rem, 0.9rem + 1vw, 1.4rem);
          color: ${styles.primaryColor};
          font-weight: bold;
          white-space: nowrap;
          cursor: pointer;
        }
        .contactTxt {
          font-size: clamp(1.2rem, 1.2rem + 2vw, 3rem);
          white-space: nowrap;
          text-align: center;
        }

        @media and screen (max-width: 60rem) {
          .logo {
            display: none;
          }
          .wtsContainer {
            flex: 1 1 40%;
          }
          .contactTxt {
            flex: 1 1 40%;
          }
        }
        @media and screen (max-width: 22rem) {
          .bar {
            border: none;
          }
        }
      `}</style>
    </>
  );
}
