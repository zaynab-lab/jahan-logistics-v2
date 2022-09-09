import { styles } from "@/public/js/styles";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function () {
  return (
    <>
      <Link href="https://wa.me/+9613751568">
        <div className="floatwts">
          <img
            width="100%"
            src="./img/png/WhatsApp_icon.png"
            alt={<FaWhatsapp />}
          />
        </div>
      </Link>
      <style jsx>{`
        .floatwts {
          color: green;
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 5rem;
          height: 5rem;
          font-size: 2.6rem;
          color: white;
          ${styles.flex};
          ${styles.flexBothcenter};
          border-radius: 50%;
          padding: 0.5rem;
          cursor: pointer;
          z-index: 20;
        }
      `}</style>
    </>
  );
}
