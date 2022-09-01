import { styles } from "@/public/js/styles";
import TopBar from "@/components/atom/TopBar";

export default function IndexPage() {
  return (
    <>
      <TopBar />
      <style jsx>{`
        .page {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          ${styles.flexAligncenter}
        }
        .pageContent {
          overflow: auto;
        }
        .btnContainer {
          padding: 1rem;
          ${styles.flexBothcenter}
        }
      `}</style>
    </>
  );
}
