import { Wizard } from "react-use-wizard";

// form steps
import TenantForm_1 from "@/components/contractSteps/step1";
import TenantInfoForm_2 from "@/components/contractSteps/step2";

const Contract = () => (
  <Wizard>
    <TenantForm_1 />
    <TenantInfoForm_2 />
  </Wizard>
);

export default Contract;
