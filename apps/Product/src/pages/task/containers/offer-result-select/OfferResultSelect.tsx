import { FormSelect } from "sharepoint-golrang-design-system";
import { useGetFlowByStep } from "../../hooks/useGetFlowByStep";
import { TKeyOfFormPrioritization } from "~/types/prioritization/prioritization.types";

export const OfferResultSelect = ({
  CurrentStepId,
}: {
  CurrentStepId: number;
}) => {
  const { data: flowAction } = useGetFlowByStep(CurrentStepId);
  return (
    <>
      <FormSelect<TKeyOfFormPrioritization>
        name="ActionId"
        label="نتایج"
        showSearch
        options={flowAction}
        filterOption={(input, option) =>
          (option?.label ?? "").toString().includes(input)
        }
      />
    </>
  );
};
