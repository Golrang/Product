import { useEffect } from "react";
import { Form } from "sharepoint-golrang-design-system";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import * as yup from "yup";
import { TFormSchema } from "sharepoint-golrang-design-system/src/components/form";
import { useRecoilState } from "recoil";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import { useSubmitEvaluationStudies } from "../../hooks/useSubmitEvaluationStudies";
import EvaluationForm from "./EvaluationForm";
import { TEvaluationStudiesForm } from "~/types/evaluation-studies/evaluationStudies.types";

const schema = yup.object<
  TFormSchema<Omit<TEvaluationStudiesForm, "SuggestionId">>
>({
  Comment: yup.string().required("توضیحات الزامی است"),
  ActionId: yup.number().required("نتیجه الزامی است"),
  File: yup.object().required("فایل الزامی است"),
});

export const EvaluationStudies = ({
  suggestion,
}: {
  suggestion: TSuggestion;
}) => {
  const [isLoading, setLoading] = useRecoilState(submitLoadingState);

  const { onSubmit } = useSubmitEvaluationStudies(
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
      <div className="max w-full rounded overflow-hidden shadow-lg p-5">
        <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
          مرحله مطالعات ارزیابی علمی -اقتصادی
        </span>
        <Form onFinish={onSubmit} schema={schema}>
          <EvaluationForm suggestion={suggestion} isLoading={isLoading} />
        </Form>
      </div>
    </>
  );
};
