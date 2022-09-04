import { styles } from "@/public/js/styles";
import Logo from "@/public/img/Logo";

export default function TopBar() {
  return (
    <>
      <div className="topBar">
        <div>
          <Logo />
        </div>
      </div>
      <style jsx>{`
        .topBar {
          background: ${styles.primaryColor};
          padding: 1rem 2rem;
        }
      `}</style>
    </>
  );
}
