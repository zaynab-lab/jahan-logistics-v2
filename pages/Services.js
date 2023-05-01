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
        <div className="cardContainer">
          {services.map((service, i) => (
            <div key={i} className="card">
              <div className="cardImg">
                <img
                  width="100%"
                  src={`./img/png/services/${service.img}.png`}
                  alt=""
                />
              </div>
              <div className="cardDescription">
                <div className="cardTitle">{service.name}</div>
                <div className="cardParagraph">{service.paragraph} </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />

        <style jsx>{`
          .servicesHead {
            padding: 3rem 0.4rem;
            text-align: center;
            border-bottom: 2px solid ${styles.primaryColor};
            font-size: 1.6rem;
            color: ${styles.primaryColor};
            font-weight: bold;
          }
          .servicesHeadtitle {
            font-size: 2.6rem;
            white-space: nowrap;
            padding-bottom: 1.6rem;
          }
          .cardContainer {
            max-width: 70rem;
            margin: auto;
            padding: 2rem 1rem;
          }
          .card {
            ${styles.flex};
            ${styles.flexAligncenter};
          }
          .card:nth-child(even) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
          }
          .cardImg {
            flex: 1 1 50%;
            padding: 2rem 0rem;
            min-width: 40%;
          }
          .cardDescription {
            flex: 1 1 50%;
            text-align: center;
            font-size: clamp(1rem, 0.5rem + 2vw, 1.4rem);
          }
          .cardTitle {
            font-size: clamp(1.6rem, 1rem + 2vw, 2.6rem);
            color: ${styles.primaryColor};
            font-weight: bold;
            padding-bottom: clamp(1rem, 2vw, 2.6rem);
          }
          .cardParagraph {
            padding: 0rem 1rem;
            max-width: 22rem;
            line-height: 1.6rem;
            margin: auto;
          }
        `}</style>
      </PageLayout>
    </>
  );
}

const services = [
  {
    name: "Source Providing",
    img: "sourceImg",
    paragraph:
      "It is difficult to find the most competitive price in Iran without help, as there are too many secrets involved."
  },
  {
    name: "Export",
    img: "exportImg",
    paragraph:
      "We provide you with the most efficiency exporting services, from full truck shipment to partial shipment starting from 1 kilograms exclusively at Jahan logistics."
  },
  {
    name: "Financial",
    img: "financialImg",
    paragraph: "Our services include money transfers to and from Iran."
  },
  {
    name: "Door to door",
    img: "doorImg",
    paragraph:
      "Don’t bother yourself more we are here to help. We provide you a fully service from Iran to your door in Lebanon."
  },
  {
    name: "Full Track Shipping",
    img: "trackImg",
    paragraph: "We give you the best price in town for your own container."
  },
  {
    name: "Warehouse",
    img: "wareImg",
    paragraph:
      "In the shipping process, warehouses is a must, so your goods stored safely between this countries."
  }
];
