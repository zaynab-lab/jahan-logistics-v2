export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-weight: regular;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
          font-family: Arial, Helvetica, sans-serif;
        }
        *::-webkit-scrollbar {
          display: none;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: all 0.5s ease-out;
        }
      `}</style>{" "}
    </>
  );
}
