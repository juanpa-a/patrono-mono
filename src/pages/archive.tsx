import { Text, Grid, HStack, VStack, Box, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Archive = () => {
  const contracts = [
    { name: "test", is_active: true },
    { name: "foobar", is_active: true },
    { name: "hello world", is_active: false },
    { name: "foo", is_active: false },
    { name: "bar", is_active: true },
  ];
  // const contracts: Array<{ name: string; is_active: boolean }> = [];
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box py={164}>
      {contracts.length ? (
        <>
          <motion.div
            key={`title`}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Text fontWeight={800} fontSize={36} mb={16}>
              ARCHIVO
            </Text>
          </motion.div>
          <Grid
            templateColumns={isDesktop ? "1fr 1fr 1fr 1fr" : '1fr 1fr'}
            gap="32px"
            justifyContent={"center"}
          >
            {contracts.map(({ name, is_active }, i) => (
              <motion.div
                key={`contract-${i}`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.12 * (i + 1) + 0.2, ease: "easeIn" }}
              >
                <Contract name={name} is_active={is_active} key={i} />
              </motion.div>
            ))}
          </Grid>
        </>
      ) : (
        <Text fontWeight={800} fontSize={36}>
          AUN NO TIENES CONTRATOS...
        </Text>
      )}
    </Box>
  );
};

const Contract = ({
  name,
  is_active,
}: {
  name: string;
  is_active: boolean;
}) => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center">
    <motion.div
      key={`c-${name}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.05, ease: "linear" }}
    >
      <VStack>
        <HStack
          w="164px"
          h="208px"
          borderRadius="11px"
          border="2px #DBD8CC solid"
        >
          <Image
            className="mx-auto"
            src="/archive-logo.png"
            width={85}
            height={50}
            alt="logo"
          />
        </HStack>
        <HStack>
          <span
            style={{
              color: `${is_active ? "#80C73F" : "#e56e56"}`,
              fontSize: "32px",
            }}
          >
            •
          </span>
          <Text>{name}</Text>
        </HStack>
      </VStack>
    </motion.div>
    // </div>
  );
};

export default Archive;
