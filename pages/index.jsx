import Head from "next/head";
import Home from "./home"
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


export default function Index() {
  return (
    <main> 
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <section>

      <Home/>
   
     </section>
    </main>
  );
}
