import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/custom.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
