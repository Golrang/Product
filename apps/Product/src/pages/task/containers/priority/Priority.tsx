import { FormSelect } from "sharepoint-golrang-design-system";
import { useGetPriority } from "../../hooks/useGetPriority";
import { TKeyOfFormPrioritization } from "~/types/prioritization/prioritization.types";
import { Actions } from "~/constant";
export const Priority = ({ ActionId }: { ActionId: number }) => {
  const { allPriority } = useGetPriority();
  return (
    <>
      <FormSelect<TKeyOfFormPrioritization>
        name="PriorityId"
        label="اولویت"
        showSearch
        disabled={ActionId !== Actions.confirmation}
        options={allPriority}
        filterOption={(input, option) =>
          (option?.label ?? "").toString().includes(input)
        }
      />
    </>
  );
};
