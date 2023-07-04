import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import {
  VStack,
  Text,
  HStack,
  Center,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import Button from "@/components/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const user = useUser();
  const [isMuted, toggleMute] = useState(true);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const router = useRouter();

  const animations = {
    lf: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    rg: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <div>
      <Head>
        <title>Patrono - legatech</title>
        <meta name="description" content="Patrono - legaltech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <HStack
          id="landing-container"
          justifyContent={isDesktop ? "space-between" : ""}
          w={isDesktop ? "100%" : ""}
        >
          <Box display={isDesktop ? "block" : "none"}>
            <motion.img
              src="lf.svg"
              alt="Left Arrow"
              variants={animations.lf}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
          </Box>
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <VStack spacing={"64px"}>
              <Text
                fontWeight={700}
                fontSize={"32px"}
                maxW={"33vw"}
                textAlign={"center"}
              >
                EL CONTRATO <br /> QUE NO TIENE FRONTERAS
              </Text>
              <Image
                className="mx-auto"
                src="/olive.svg"
                width={66 * 1.5}
                height={36 * 1.5}
                alt="logo"
                color="black"
              />
              <Center maxW={"34vw"} textAlign={"center"}>
                Introduciendo a Eneas, el contrato de arrendamiento que puedes
                configurar en línea en minutos.
              </Center>
              <HStack>
                <Button
                  text="Descubrir"
                  onClick={() => {
                    if (!user.isSignedIn) router.push("/login");
                    router.push("/archive");
                  }}
                />
                <Button
                  text="Configurar"
                  secondary
                  onClick={() => {
                    if (!user.isSignedIn) router.push("/login");
                    router.push("/desk");
                  }}
                />
              </HStack>
            </VStack>
          </motion.div>
          <Box display={isDesktop ? "block" : "none"}>
            <motion.img
              src="rg.svg"
              alt="Left Arrow"
              variants={animations.rg}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, ease: "easeIn" }}
            />
          </Box>
        </HStack>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <video
          onClick={() => toggleMute(!isMuted)}
          autoPlay
          muted={isMuted}
          loop
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        >
          <source src="/video.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
