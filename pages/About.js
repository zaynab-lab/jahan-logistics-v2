import Footer from "@/components/molecule/Footer";
import PageLayout from "@/components/PageLayout";
import { styles } from "@/public/js/styles";

export default function About() {
  return (
    <>
      <PageLayout pageName="About">
        <div className="imgContainer"></div>
        <div className="aboutSection">
          <div className="aboutusTxt">About us</div>
          <div className="aboutTxtImgContainer">
            <div>
                 Established in 2017, Jahan Logistics is one of the leading full and partial freight companies throughout Middle East.
 Jahan Logistics aim to redefining logistics, and freight services by playing an important role between customer’s trading requirements and the world out there.
Supported by our strategies and our team, Jahan Logistics connects companies to the world safely through it’s wide services that simplifies your trading operations and even your personal life.
These services includes the following, full-truck shipment, partial shipping starting from 1 kilogram, custom clearance services, money transfer, provide sourcing and beside all of this we insures goods from packaging to delivering until they reach your door.
  Finally, because of our customer’s trust, our company believes it can achieve more successes, expand it’s services, and reach a high professional reputation in the shipping world. 
<div>Co-Founder & CEO</div>
<div>Akram Youssef El-Dirani</div>
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
