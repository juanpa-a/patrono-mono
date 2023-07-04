import { TextField } from "@/components/textInput";
import { Box, Text } from '@chakra-ui/react'

export const LandlordBusiness = ({ handleChange: handleChange }) => {
  return (
    <Box minW={'33vw'}>
      <Text fontWeight={800} fontSize={36}>
        PERSONA MORAL
      </Text>
      <section className="w-full">
        <TextField
          text="Nombre de empresa u organizacion"
          label="landlordMoralName"
          placeholer="Patrono inc"
          setValue={handleChange}
        />
        <TextField
          text="RFC"
          label="landlordRFC"
          placeholer="ABC123456"
          setValue={handleChange}
        />
      </section>
    </Box>
  );
};
