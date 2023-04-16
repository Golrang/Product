import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Form } from "sharepoint-golrang-design-system";
import { ViewProductSuggestion } from "../view-product-suggestion";
import { HistoryOfActions } from "../history-of-actions";
// import { CheckBox } from "~/../../../packages/design-system/src/components/checkbox/CheckBox";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { useSubmitPrioritization } from "../../hooks/useSubmitPrioritization";
import * as yup from "yup";
import { TFormSchema } from "~/../../../packages/design-system/src/components/form";
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
  const [checked] = useState(false);
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
      <div className="max w-full rounded overflow-hidden shadow-lg p-5">
        <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
          مرحله الویت بندی
        </span>
        <Row gutter={24} className="mb-5">
          {/* <Col>
            <CheckBox
              name="showProductCheckbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Col> */}
        </Row>
        <Row gutter={24} className="mb-5">
          <Col
            md={24}
            className={`${
              checked ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out duration-500 `}
          >
            {checked && <ViewProductSuggestion suggestionId={suggestion.Id} />}
          </Col>
        </Row>

        <Form onFinish={onSubmit} schema={schema}>
          <PrioritizeForm suggestion={suggestion} isLoading={isLoading} />
        </Form>

        <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
          تاریخچه اقدامات
        </span>
        {suggestion && (
          <Row gutter={24} className="mb-5">
            <Col md={24}>
              <HistoryOfActions suggestionId={suggestion.Id} />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};
