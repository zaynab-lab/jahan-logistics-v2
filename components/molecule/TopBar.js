import { styles } from "@/public/js/styles";
import Logo from "@/public/img/Logo";
import Hamburger from "@/public/img/svg/Hamburger";
import { pageLists } from "./Menu";
import Link from "next/link";

export default function TopBar({ setMenu, pageName }) {
  return (
    <>
      <div className="topBar">
        <div className="Logo">
          <Logo />
        </div>
        <div className="menuItemsContainer">
          {pageLists.map((page, i) => (
            <Link key={i} href={`/${page.name}`}>
              <div
                className={`pageName ${
                  page.name === pageName ? " active" : " dactive"
                }`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                {page.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="hamburger" onClick={() => setMenu(true)}>
          <Hamburger />
        </div>
      </div>
      <style jsx>{`
        .topBar {
          background: ${styles.primaryColor};
          padding: 1rem 2rem;
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          position: sticky;
          top: 0;
          width: 100%;
        }

        .Logo {
          width: 70%;
          max-width: 12rem;
          cursor: pointer;
        }
        .hamburger {
          padding: 0.3rem;
          width: 3rem;
          cursor: pointer;
          display: none;
        }
        .menuItemsContainer {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1.2rem;
          font-weight: bold;
          font-size: 1.2rem;
        }
        @media only screen and (max-width: 600px) {
          .hamburger {
            display: block;
          }
          .menuItemsContainer {
            display: none;
          }
        }
        .pageName {
          font-size: 1.2rem;
          color: lightgray;
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1rem;
        }
        .pageName:hover {
          color: white;
        }

        .active {
          color: white;
        }
        .dactive {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
