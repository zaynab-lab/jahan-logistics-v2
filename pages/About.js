import Footer from "@/components/molecule/Footer";
import PageLayout from "@/components/PageLayout";
import { styles } from "@/public/js/styles";

export default function About() {
  return (
    <>
      <PageLayout pageName="About">
        <div>
          <div className="imgContainer"></div>
          <div className="aboutSection">
            <div className="aboutusTxt">About us</div>
            <div className="aboutTxtImgContainer">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
              <div>
                <img width="100%" src="./img/png/aboutImg.png" alt="" />
              </div>
            </div>
          </div>
          <div className="infoSection">
            <div className="difTitle">WHAT MAKES US DIFFERENT</div>
            <div className="infoSectionCards">
              <div>24-HOUR SUPPORT</div>
              <div>DELIVERY ON TIME</div>
              <div>EASY PAYMENT</div>
            </div>
          </div>
          <div className="infoSection">
            <div className="difTitle">OUR VALUES</div>
            <div className="infoSectionCardsc">
              <div>Customer satisfaction</div>
              <div>Using best technologies</div>
              <div>Moving forward</div>
            </div>
          </div>
          <div>
            <img width="100%" src="./img/png/starthere.png" alt="" />
          </div>
          <Footer />
        </div>
      </PageLayout>
      <style jsx>{`
        .imgContainer {
          max-height: 15rem;
          height: 15rem;
          background-image: url("./img/png/aboutHead.png");
          background-size: cover;
        }
        .aboutSection {
          padding: 3rem 1rem;
          max-width: 70rem;
          margin: auto;
        }
        .aboutusTxt {
          color: ${styles.primaryColor};
          font-size: 1.6rem;
        }
        .aboutTxtImgContainer {
          ${styles.flex};
          ${styles.flexBothncenter};
          flex-wrap: wrap;
          font-size: 1.1rem;
          line-height: calc(1.6rem + 1vw);
          gap: calc(0.6rem + 3vw);
          padding: 0.6rem 0rem;
        }
        .aboutTxtImgContainer div {
          flex: 1 1 20rem;
          text-align: justify;
          text-justify: inter-word;
        }
        .infoSection {
          padding: 3rem 2rem;
          font-weight: bold;
          text-align: center;
        }
        .difTitle {
          color: ${styles.primaryColor};
          font-size: 2rem;
          padding: 2rem 0rem;
        }

        .infoSectionCards {
          ${styles.flex};
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 2rem;
        }
        .infoSectionCards div {
          border: 2px solid ${styles.primaryColor};
          padding: 2rem;
          flex: 0 1 8rem;
          font-size: 1.6rem;
          color: ${styles.primaryColor};
        }
        .infoSectionCards div:nth-child(2) {
          color: white;
          background: ${styles.primaryColor};
        }
        .infoSectionCardsc {
          ${styles.flex};
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 2rem;
        }

        .infoSectionCardsc div {
          border: 2px solid ${styles.primaryColor};
          padding: 1rem 2rem;
          font-size: 1.6rem;
          width: 12rem;
          height: 12rem;
          color: white;
          background: ${styles.primaryColor};
          border-radius: 50%;
          ${styles.flex};
          ${styles.flexBothcenter};
        }
        .infoSectionCardsc div:nth-child(2) {
          color: ${styles.primaryColor};
          background: white;
        }
      `}</style>
    </>
  );
}
