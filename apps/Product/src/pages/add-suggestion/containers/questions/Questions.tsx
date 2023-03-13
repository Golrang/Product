import { ConsumableQuestion } from "../consumable-question/ConsumableQuestion";
import { PharmaceuticalFormsQuestion } from "../pharmaceutical-forms-question/PharmaceuticalFormsQuestion";
import { TherapeuticFieldQuestion } from "../therapeutic-field-question/TherapeuticFieldQuestion";

export const Questions = () => {
  return (
    <>
      <PharmaceuticalFormsQuestion />
      <TherapeuticFieldQuestion />
      <ConsumableQuestion />
    </>
  );
};
