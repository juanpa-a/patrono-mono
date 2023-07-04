import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { api } from "@/utils/api";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChakraProvider } from "@chakra-ui/react";
import { useLayoutEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // useLayoutEffect(() => {
  //   const nav = document.getElementById("navbar");
  //   console.log("h", nav?.clientHeight);
  // }, []);

  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider>
        <Navbar />
        <main
          style={{ paddingTop: "124px" }}
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
