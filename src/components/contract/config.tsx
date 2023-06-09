import { Text, VStack } from "@chakra-ui/react";
import { BasicConfig } from "./basic";
import { CustomConfig } from "./custom";
import { LandlordBusiness } from "./landlordBusiness";
import { LandlordRepresentative } from "./landlordRepresentative";
import { Property } from "./property";
import { Tenant } from "./tenant";
import Image from "next/image";
import { TextField } from "../textInput";

export const ContractFormSteps = (handleChange: (x: any) => void) => [
  {
    form: (
      <VStack spacing={4} minW={"33vw"}>
        <Text mb={8} fontWeight={800} fontSize={36}>
          CONTRATO ENEAS
        </Text>
        <Image
          className="mx-auto"
          src="/olive.svg"
          width={67 * 1.5}
          height={37 * 1.5}
          alt="logo"
          color="black"
        />
        <Text fontSize={20}>
          El contrato de arrendamiento automatizado más poderoso del mercado.
        </Text>
        <Image
          className="mx-auto"
          src="/olive.svg"
          width={67 * 1.5}
          height={37 * 1.5}
          alt="logo"
          color="black"
          style={{ transform: "scaleX(-1)", marginBottom: "64px" }}
        />
        <TextField
          text="¿Como quieres llamar a este contrato?"
          label="contractName"
          placeholer="Mi contrato con patrono"
          setValue={handleChange}
        />
      </VStack>
    ),
  },
  {
    title: "Propiedad",
    description: "",
    form: <Property handleChange={handleChange} />,
  },
  {
    title: "Propietario",
    description: "",
    form: <LandlordRepresentative handleChange={handleChange} />,
  },
  {
    title: "Informacion Fiscal",
    description: "",
    form: <LandlordBusiness handleChange={handleChange} />,
  },
  {
    title: "Inquilino",
    description: "",
    form: <Tenant handleChange={handleChange} />,
  },
  {
    title: "Configuración basica",
    description: "",
    form: <BasicConfig handleChange={handleChange} />,
  },
  {
    title: "Configuración personalizada",
    description: "",
    form: <CustomConfig handleChange={handleChange} />,
  },
];

const contractInfo = {
  // property
  propertyAddress: "",
  propertyState: "",
  propertyUse: "",
  propertyIsFurnished: false,
  propertyFurniture: [],
  // landlord representative
  landlordIsMoralPerson: false,
  landlordName: "",
  landlordGender: "",
  landlordNationality: "",
  landlordEmail: "",
  landlordBirthday: 0,
  // landlord moral
  landlordMoralName: "",
  landlordRFC: "",
  // tenant
  tenantName: "",
  tenantEmail: "",
  tenantGender: "",
  tenantNationality: "",
  tenantBirthday: 0,
  // contract basic
  contractStartDate: "",
  contractEndDate: "",
  paymentCycle: "",
  paymentAmount: "",
  paymentMethod: "",
  guarenteeAmount: 0,
  // contract custom
  servicesAreIncluded: false,
  mantainenceIsIncluded: false,
  // customProhibitions: [],
  // contractIsConfidential: false,
  // thirdPartyConflictResolution: false,
  hasGuarantor: false,
};
