import PageLayout from "@/components/PageLayout";
import IranMap from "@/public/img/svg/IranMap";
import WorldMap from "@/public/img/svg/WorldMap";
import Partial from "@/public/img/svg/Partial";
import Irantoleb from "@/public/img/svg/Irantoleb";
import ContactBar from "@/components/atom/ContactBar";
import Footer from "@/components/molecule/Footer";
import { styles } from "@/public/js/styles";
import Swiper from "@/components/molecule/Swiper";

export default function IndexPage() {
  return (
    <>
      <PageLayout pageName="">
        <section className="flex-section">
          <h1 className="title">
            From <span className="emph">IRAN</span> to All Over the{" "}
            <span className="emph">World</span>
          </h1>
          <div className="map">
            <IranMap />
          </div>
        </section>
        <section className="world">
          <WorldMap />
        </section>
        <section className="flex-section">
          <h1 className="title">
            <div>
              <span className="emph">Partial Shipping</span>
            </div>
            <div>
              <span className="emph">to</span>
              <span className="emphr"> Lebanon</span>
            </div>
            <div className="iranleb">
              <Irantoleb />
            </div>
          </h1>
          <div className="map">
            <Partial />
          </div>
        </section>
        <div className="swiperContainer">
          <Swiper />
        </div>
        <div className="contactBarContainer">
          <ContactBar />
        </div>
        <div className="chooseSection">
          <img width="100%" src="./img/png/choose.png" alt="" />
        </div>
        <Footer />
      </PageLayout>
      <style jsx>{`
        .flex-section {
          padding: 2rem;
          ${styles.flex}
          ${styles.flexAligncenter}
          flex-wrap:wrap;
          gap: 0.6rem 2rem;
        }
        .map {
          width: 80%;
          margin: auto;
          flex: 1 1 30rem;
          max-width: 40rem;
        }
        .world {
          max-width: 70rem;
          margin: auto;
        }
        .title {
          flex: 1 1 20rem;
          text-align: center;
          font-size: clamp(2rem, 2rem + 2vw, 3rem);
          max-width: 24rem;
          margin: auto;
          padding: 1.6rem 0rem;
          color: #444;
        }
        @media and screen (min-width: 90rem) {
          .title {
            text-align: left;
          }
        }
        .emph {
          color: ${styles.primaryColor};
        }
        .emphr {
          color: red;
        }
        .iranleb {
          padding: 1rem 3rem;
        }
        .swiperContainer {
          max-width: 80rem;
          margin: auto;
          padding: 0rem 2rem;
        }
        .contactBarContainer {
          padding: 2rem 0rem;
        }

        .chooseSection {
          max-width: 40rem;
          margin: auto;
          padding: 0rem 2rem;
        }
      `}</style>
    </>
  );
}
