import { styles } from "@/public/js/styles";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bar">
        <div>
          <Link href="https://wa.me/+989129244605">
            <div className="flex hand">
              <FaWhatsapp />
              <div>+98 912 9244 605</div>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div>Follow us:</div>
          <div className="hand">
            <FaInstagram />
          </div>
          <div className="hand">
            <FaFacebook />
          </div>
        </div>
        <div>
          <Link href="https://wa.me/+9613751568">
            <div className="flex hand">
              <FaWhatsapp />
              <div>+961 3 751 568</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="copy">Jahan Logistics 2022</div>
      <style jsx>{`
        .bar {
          background: ${styles.primaryColor};
          ${styles.flex};
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          color: white;
          padding: 0.6rem 1rem;
          flex-wrap: wrap;
        }
        .copy {
          padding: 3rem;
          text-align: center;
        }
        .flex {
          ${styles.flex};
          ${styles.flexBothcenter};
          gap: 0.3rem;
        }
        .hand {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
