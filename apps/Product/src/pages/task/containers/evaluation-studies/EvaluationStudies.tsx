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
import { useGetResultOfSuggestionById } from "../../hooks/useGetResultOfSuggestion";
import { Col } from "antd";

const schema = yup.object<
  TFormSchema<
    Omit<
      TEvaluationStudiesForm,
      "SuggestionId" | "ResultOfSuggestionId" | "CompanyId" | "EmployeeId"
    >
  >
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

  const { resultSuggestion } = useGetResultOfSuggestionById(suggestion.Id);
  const { onSubmit } = useSubmitEvaluationStudies(
    suggestion.CurrentStepId,
    suggestion.Id,
    resultSuggestion?.[0]
  );

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return (
    <>
      <div className="max w-full rounded overflow-hidden shadow-lg p-5 bg-white">
        <span className="form-header">مرحله مطالعات ارزیابی علمی -اقتصادی</span>
        {resultSuggestion && (
          <>
            <Col md={6} sm={12}>
              <span>
                اولویت:
                {resultSuggestion[0].PriorityId}
              </span>
            </Col>

            {/* <Input value={resultSuggestion[0].PriorityId} disabled /> */}
            <Form onFinish={onSubmit} schema={schema}>
              <EvaluationForm suggestion={suggestion} isLoading={isLoading} />
            </Form>
          </>
        )}
      </div>
    </>
  );
};
