import PageLayout from "@/components/PageLayout";
import IranMap from "@/public/img/svg/IranMap";
import WorldMap from "@/public/img/svg/WorldMap";
import Partial from "@/public/img/svg/Partial";
import Irantoleb from "@/public/img/svg/Irantoleb";

import { styles } from "@/public/js/styles";

export default function IndexPage() {
  return (
    <>
      <PageLayout pageName="">
        <section className="heroSection">
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
        <section className="heroSection">
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
      </PageLayout>
      <style jsx>{`
        .heroSection {
          padding: 2rem;
          ${styles.flex}
          ${styles.flexAligncenter}
          flex-wrap:wrap;
          gap: 2rem;
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
          font-size: 2.2rem;
          max-width: 24rem;
          margin: auto;
          padding: 2rem 0rem;
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
          padding: 3rem;
        }
      `}</style>
    </>
  );
}
