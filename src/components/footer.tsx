import { Box, Divider, HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-stone-800 px-8 py-24 text-sand">
      <Box flex={1}>
        <Text textAlign={"center"}>
          aude, hospes, contemnere opes et te quoque dignum | finge deo,
          rebusque veni non asper egenis. (Aen. 8. 364-5)
        </Text>
        <Divider mt={'64px'} mb={'48px'} />
        <HStack justifyContent={'space-between'}>
          <HStack spacing={18}>
            <Text>Condiciones de uso</Text>
            <Text>Política de privacidad</Text>
          </HStack>
          <Text>© 2022 PATRONO. Todos los derechos reservados.</Text>
        </HStack>
      </Box>
    </footer>
  );
};

export default Footer;
