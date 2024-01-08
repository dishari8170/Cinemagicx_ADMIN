import '@/styles/globals.css'
import Script from "next/script";
import Sidex from "@/Comp/Sidex";

export default function App({ Component, pageProps }) {
  return <>

    {/*<Script src="/bootstrap.bundle.js"/>*/}

    <Component {...pageProps} />

    </>
}
