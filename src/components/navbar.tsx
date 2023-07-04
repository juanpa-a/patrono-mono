import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
  Text,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <nav
          id="navbar"
          style={{ zIndex: 1 }}
          className="fixed flex w-screen items-center justify-between bg-grain p-8 md:justify-between"
        >
          <div className="flex items-center hover:scale-125 md:block">
            <span
              onClick={onOpen}
              className="text-xl uppercase text-gray-800"
              style={{ fontWeight: 300 }}
            >
              Menu
            </span>
          </div>
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                className="mx-auto"
                src="/logo.svg"
                width={60}
                height={60}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex items-center hover:scale-125 md:block">
            <Link href={"/login"}>
              <span
                className="ml-4 text-xl font-bold uppercase text-gray-800"
                style={{ fontWeight: 300 }}
              >
                {!user.isSignedIn ? 'Entrar' : 'Salir'}
              </span>
            </Link>
          </div>
        </nav>
      </motion.div>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#E7E4D8"}>
          <DrawerBody
            border={"1px green solid"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"128px"}
          >
            <motion.div whileHover={{ scale: 1.2 }}>
              <VStack>
                <Link href={"/desk"} onClick={onClose}>
                  <Image
                    className="mx-auto"
                    src="/desk.png"
                    width={80}
                    height={80}
                    alt="logo"
                  />
                  <Center mt={3}>ESCRITORIO</Center>
                </Link>
              </VStack>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <VStack>
                <Link
                  href={"/archive"}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  onClick={onClose}
                >
                  <Image
                    className="mx-auto"
                    src="/arch.png"
                    width={80}
                    height={80}
                    alt="logo"
                  />
                  <Center mt={3}>ARCHIVO</Center>
                </Link>
              </VStack>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <VStack>
                <Link href={"/observatory"} onClick={onClose}>
                  <Image
                    className="mx-auto"
                    src="/obs.png"
                    width={80}
                    height={80}
                    alt="logo"
                  />
                  <Center mt={3}>OBSERVATORIO</Center>
                </Link>
              </VStack>
            </motion.div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
