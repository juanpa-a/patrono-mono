import Button from "@/components/button";
import { ContractFormSteps } from "@/components/contract/config";
import {
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  Stepper,
  useSteps,
  StepNumber,
  Text,
  StepSeparator,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { isDirty } from "zod";

const Observatory = () => {
  const [isDirty, setIsDirty] = useState(true);
  const [contractConfig, setContractConfig] = useState({
    contractName: "",
    // property
    propertyAddress: "",
    propertyState: "",
    propertyUse: "",
    propertyIsFurnished: false,
    propertyFurniture: [],
    propertyStreet: "",
    propertyOuterNumber: "",
    propertyInnerNumber: "",
    // landlord representative
    landlordIsMoralPerson: false,
    landlordName: "",
    landlordGender: "",
    landlordNationality: "",
    landlordEmail: "",
    landlordBirthday: 0,
    landlordRepresentativeName: "",
    landlordRepresentativeGender: "",
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
    paymentGuarantee: 0,
    // customProhibitions: [],
    // contractIsConfidential: false,
    // thirdPartyConflictResolution: false,
    hasGuarantor: false,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setContractConfig((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const contractSteps = ContractFormSteps(handleChange);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: contractSteps.length,
  });

  useEffect(() => {
    setIsDirty(true);
  }, [activeStep]);

  useEffect(() => {
    // console.log(contractConfig);
    switch (activeStep) {
      case 0:
        if (contractConfig.contractName) setIsDirty(false);
        else setIsDirty(true);
        break;
      case 1:
        if (
          contractConfig.propertyStreet &&
          contractConfig.propertyOuterNumber &&
          contractConfig.propertyInnerNumber &&
          contractConfig.propertyState &&
          contractConfig.propertyUse &&
          contractConfig.propertyIsFurnished
        )
          setIsDirty(false);
        else setIsDirty(true);
        break;
      case 2:
        if (
          contractConfig.landlordRepresentativeName &&
          contractConfig.landlordRepresentativeGender &&
          contractConfig.landlordIsMoralPerson &&
          contractConfig.landlordNationality
        )
          setIsDirty(false);
        else setIsDirty(true);
        break;
      case 3:
        if (contractConfig.landlordMoralName && contractConfig.landlordRFC)
          setIsDirty(false);
        else setIsDirty(true);
        break;
      case 4:
        if (
          contractConfig.tenantName &&
          contractConfig.tenantEmail &&
          contractConfig.tenantGender &&
          contractConfig.tenantNationality
        )
          setIsDirty(false);
        else setIsDirty(true);
        break;
      case 5:
        if (
          contractConfig.contractStartDate &&
          contractConfig.contractEndDate &&
          contractConfig.paymentCycle &&
          contractConfig.paymentAmount &&
          contractConfig.paymentMethod &&
          contractConfig.paymentGuarantee
        )
          setIsDirty(false);
        else setIsDirty(true);
        break;

      default:
        break;
    }
  }, [contractConfig, activeStep]);

  return (
    <VStack mt={16}>
      {activeStep < contractSteps.length - 1 ? (
        <>
          <ProgressStepper activeStep={activeStep} steps={contractSteps} />
          <AnimatePresence mode="wait">
            <FormStepper
              isDirty={isDirty}
              key={activeStep}
              goToNext={goToNext}
              activeStep={activeStep}
              finalStep={contractSteps.length - 1}
            >
              {contractSteps[activeStep]?.form}
            </FormStepper>
          </AnimatePresence>
        </>
      ) : (
        <ContractSuccess />
      )}
    </VStack>
  );
};

const ContractSuccess = () => {
  function downloadPDF() {
    const pdfBlob = new Blob([], { type: "application/pdf" });
    const url = URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "contrato-patrono.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    downloadPDF();
  }, []);

  return (
    <HStack>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Image
          className="mx-auto"
          src="/cage.svg"
          width={420}
          height={520}
          alt="logo"
          color="black"
        />
      </motion.div>
      <VStack>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <Text fontSize={32} fontWeight={700}>
            TU CONTRATO <br /> ESTA LISTO
          </Text>
        </motion.div>
      </VStack>
    </HStack>
  );
};

const FormStepper = ({
  goToNext,
  children,
  activeStep,
  finalStep,
  isDirty,
}: {
  goToNext: () => void;
  children: React.ReactNode;
  activeStep: number;
  finalStep: number;
  isDirty: boolean;
}) => {
  const controls = useAnimationControls();
  useEffect(() => {
    const restartAnimation = async (): Promise<unknown> =>
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: "0.8", ease: "easeIn" },
      });
    // controls.start({ scale: 2 });
    restartAnimation()
      .then(() => console.log(""))
      .catch(() => console.log(""));
  }, [controls]);
  return (
    <VStack p={16} minH={"100vh"} minW={"50vw"}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <motion.div animate={controls} style={{ opacity: 0, x: -50 }}>
        <Button
          disabled={isDirty}
          text={`${
            activeStep === 0
              ? "Crear contrato"
              : activeStep >= finalStep
              ? "Terminar"
              : "Siguiente"
          }`}
          onClick={goToNext}
        />
      </motion.div>
    </VStack>
  );
};

const ProgressStepper = ({
  activeStep,
  steps,
}: {
  activeStep: number;
  steps: Array<{ form: React.ReactNode }>;
}) => {
  return (
    <Stepper index={activeStep} colorScheme="orange">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Observatory;
