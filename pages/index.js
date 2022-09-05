import PageLayout from "@/components/PageLayout";
import IranMap from "@/public/img/svg/IranMap";
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
          max-width: 36rem;
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
      `}</style>
    </>
  );
}
