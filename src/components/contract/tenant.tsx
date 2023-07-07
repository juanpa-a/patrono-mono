import { TextField } from "@/components/textInput";
import { SelectField } from "../selectInput";
import { Box, Text } from "@chakra-ui/react";

export const Tenant = ({
  handleChange,
}: {
  handleChange: (x: any) => void;
}) => {
  return (
    <Box minW={"33vw"}>
      <Text fontWeight={800} fontSize={36}>
        INQUILINO
      </Text>
      <section className="w-full">
        <TextField
          text="Nombre"
          label="tenantName"
          placeholer="Pedro"
          setValue={handleChange}
        />
        <TextField
          text="Email"
          label="tenantEmail"
          placeholer="pedro@patrono.mx"
          setValue={handleChange}
        />
        <SelectField
          label="tenantGender"
          text="Genero"
          onChange={handleChange}
          options={[
            { value: "MALE", text: "Masculino" },
            { value: "FEMALE", text: "Femenino" },
          ]}
        />
        <SelectField
          label="tenantNationality"
          text="Nacionalidad"
          onChange={handleChange}
          options={[{ value: "MX", text: "México" }]}
        />
      </section>
    </Box>
  );
};
