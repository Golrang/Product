import { Col, Row } from "antd";
import { FormTextArea, Button } from "sharepoint-golrang-design-system";
import { FileUpload } from "../file-upload";
import { OfferResultSelect } from "../offer-result-select";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { taskState } from "~/recoil-store/task";

const EvaluationForm = ({
  suggestion,
  isLoading,
}: {
  suggestion: TSuggestion;
  isLoading: boolean;
}) => {
  const navigate = useNavigate();
  const resetTaskId = useResetRecoilState(taskState);
  const onBackHandler = () => {
    resetTaskId();
    navigate("/cartable", { replace: true });
  };

  return (
    <>
      <Row gutter={24} className="mb-5">
        <Col md={24}>
          <OfferResultSelect CurrentStepId={suggestion.CurrentStepId} />
        </Col>
      </Row>

      <Row gutter={24} className="mb-5">
        <Col md={24}>
          <FormTextArea
            label="توضیحات"
            name="Comment"
            placeholder="توضیحات"
            autoSize={{ minRows: 4 }}
          />
        </Col>
      </Row>

      <Row gutter={24} className="mb-5">
        <Col md={6}>
          <FileUpload />
        </Col>
      </Row>

      <Row gutter={24} className="mb-5 flex justify-center items-center">
        <Button
          className="!inline-flex !items-center btn-danger btn"
          key="cancel"
          onClick={onBackHandler}
          disabled={isLoading}
        >
          بازگشت
        </Button>

        <Button
          className="!inline-flex !items-center "
          key="submit"
          htmlType="submit"
          disabled={isLoading}
        >
          ثبت
        </Button>
      </Row>
    </>
  );
};
export default EvaluationForm;
