import { useEffect } from "react";
import { Form } from "sharepoint-golrang-design-system";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { useSubmitPrioritization } from "../../hooks/useSubmitPrioritization";
import * as yup from "yup";
import { TFormSchema } from "sharepoint-golrang-design-system/src/components/form";
import { TPrioritizationForm } from "~/types/prioritization/prioritization.types";
import { useRecoilState } from "recoil";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import PrioritizeForm from "./PrioritizeForm";

const schema = yup.object<
  TFormSchema<
    Omit<
      TPrioritizationForm,
      "SuggestionId" | "PriorityId" | "PostponementDate"
    >
  >
>({
  Comment: yup.string().required("توضیحات الزامی است"),
  ActionId: yup.number().required("نتیجه الزامی است"),
  File: yup.object().required("فایل الزامی است"),
});

export const Prioritize = ({ suggestion }: { suggestion: TSuggestion }) => {
  const [isLoading, setLoading] = useRecoilState(submitLoadingState);

  const { onSubmit } = useSubmitPrioritization(
    suggestion.CurrentStepId,
    suggestion.Id
  );

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return (
    <>
      <div className="max w-full rounded overflow-hidden shadow-lg p-5 bg-white">
        <span className="form-header">مرحله الویت بندی</span>
        <Form onFinish={onSubmit} schema={schema}>
          <PrioritizeForm suggestion={suggestion} isLoading={isLoading} />
        </Form>
      </div>
    </>
  );
};
