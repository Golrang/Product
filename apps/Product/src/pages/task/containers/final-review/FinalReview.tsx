import { useEffect } from "react";
import { Form } from "sharepoint-golrang-design-system";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import * as yup from "yup";
import { TFormSchema } from "sharepoint-golrang-design-system/src/components/form";
import { TPrioritizationForm } from "~/types/prioritization/prioritization.types";
import { useRecoilState } from "recoil";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import FinalReviewForm from "./FinalReviewForm";
import { useGetResultOfSuggestionById } from "../../hooks/useGetResultOfSuggestion";
import { useSubmituseSubmitFinalReview } from "../../hooks/useSubmitFinalReview";
import { Col } from "antd";

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

export const FinalReview = ({ suggestion }: { suggestion: TSuggestion }) => {
  const [isLoading, setLoading] = useRecoilState(submitLoadingState);
  const { resultSuggestion } = useGetResultOfSuggestionById(suggestion.Id);
  const { onSubmit } = useSubmituseSubmitFinalReview(
    suggestion.CurrentStepId,
    suggestion.Id,
    resultSuggestion?.[0]?.Id
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
          مرحله بررسی نهایی
        </span>
        {resultSuggestion && (
          <>
            <Col md={6} sm={12}>
              <span>
                اولویت:
                {resultSuggestion[0].PriorityId}
              </span>
            </Col>
            <Form onFinish={onSubmit} schema={schema}>
              <FinalReviewForm suggestion={suggestion} isLoading={isLoading} />
            </Form>
          </>
        )}
      </div>
    </>
  );
};
