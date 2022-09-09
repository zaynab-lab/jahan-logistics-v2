import Footer from "@/components/molecule/Footer";
import PageLayout from "@/components/PageLayout";
import { styles } from "@/public/js/styles";

export default function Services() {
  return (
    <>
      <PageLayout pageName="Services">
        <div className="servicesHead">
          <div className="servicesHeadtitle">OUR SERVICES</div>
          <div>Fast & safe shipping is all you need</div>
        </div>

        <Footer />

        <style jsx>{`
          .servicesHead {
            padding: 3rem 0.4rem;
            text-align: center;
            border-bottom: 2rem solid ${styles.primaryColor};
            font-size: 1.6rem;
            color: ${styles.primaryColor};
            font-weight: bold;
          }
          .servicesHeadtitle {
            font-size: 2.6rem;
            white-space: nowrap;
            padding-bottom: 1.6rem;
          }
        `}</style>
      </PageLayout>
    </>
  );
}
