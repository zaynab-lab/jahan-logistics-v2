import { styles } from "@/public/js/styles";

export default function Footer() {
  return (
    <>
      <div className="bar">hi</div>
      <div className="copy">Jahan Logistics 2022</div>
      <style jsx>{`
        .bar {
          background: ${styles.primaryColor};
        }
        .copy {
          padding: 3rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}
