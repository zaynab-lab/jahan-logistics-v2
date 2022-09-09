import PageLayout from "@/components/PageLayout";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <PageLayout pageName="Contact">
        <div className="imghead"></div>
        <div className="contactContainer">
          <div className="contactSection">
            <div className="contactInfoContainer">
              <div className="contactCard">
                <div className="contactTitle">GET IN TOUCH</div>
                <div className="phoneNumbers">
                  <Link href="https://wa.me/+9613751568">
                    <div className="phone">
                      <FaPhone />
                      <div>+961 3 751 568</div>
                    </div>
                  </Link>
                  <Link href="https://wa.me/+989129244605">
                    <div className="phone">
                      <FaPhone />
                      <div>+98 912 9244 605</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="contactCard">
              <div className="contactTitle">Our social media</div>
              <div className="social">
                <div className="insta">
                  <FaInstagram />
                </div>
                <div className="face">
                  <FaFacebook />
                </div>
                <div className="tele">
                  <FaTelegram />
                </div>
              </div>
            </div>
          </div>
          <div className="imgContainer">
            <img width="100%" src="./img/png/call.jpeg" alt="" />
          </div>
        </div>
      </PageLayout>

      <style jsx>{`
        .contactContainer {
          ${styles.flex};
          ${styles.flexAligncenter};
          flex-wrap: wrap;
          gap: 2rem 0rem;
        }
        .contactSection {
          ${styles.flex};
          ${styles.flexBothcenter};
          flex-direction: column;
          gap: 2rem;
          flex: 1 1 50%;
        }
        .contactTitle {
          font-size: 2.2rem;
          padding-bottom: 1rem;
          font-weight: bold;
          color: ${styles.primaryColor};
        }
        .phoneNumbers {
          font-size: clamp(0.9rem, 0.9rem + 1vw, 1.4rem);
          color: ${styles.primaryColor};
          font-weight: bold;
          white-space: nowrap;
          cursor: pointer;
        }
        .contactInfoContainer {
          padding: 2rem;
          text-align: center;
        }
        .imgContainer {
          flex: 1 1 50%;
          max-height: 87vh;
          overflow: hidden;
          min-width: 24rem;
        }

        .phone {
          ${styles.flex};
          ${styles.flexAligncenter};
          gap: 1rem;
          padding: 0rem 1rem;
          padding-top: 0.6rem;
        }

        .social {
          font-size: 2.6rem;
          ${styles.flex};
          ${styles.flexBothcenter};
          color: ${styles.secondaryColor};
          gap: 1rem;
          cursor: pointer;
        }
        .tele {
          color: #229ed9;
        }
        .face {
          color: blue;
        }
        .insta {
          color: #ff007f;
        }
        @media and screen(max-width: 50rem) {
          .imghead {
            width: 100vw;
            height: 16rem;
            background: url("./img/png/call.jpeg");
            background-size: cover;
            background-position: center;
          }
          .imgContainer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
