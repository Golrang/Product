import { Button, Col, Divider, Row } from "antd";
import { Material } from "./containers/material";
import { OfferReason } from "./containers/offer-reason";
import { OtherPharmaceuticalForms } from "./containers/other-pharmaceutical-forms";
import { PharmaceuticalForms } from "./containers/pharmaceutical-forms";
import { Questions } from "./containers/questions/Questions";
import { Recommender } from "./containers/recommender";
import { TherapeuticField } from "./containers/therapeutic-field";
import { TherapeuticFieldComment } from "./containers/therapeutic-field-comment";
import { TKeyOfForm } from "types/suggestion/suggestion.types";
import { UploadFile } from "./containers/upload-file";
import { useSubmitSuggestion } from "./hooks/useSubmitSuggestion";
import { useRecoilValue } from "recoil";
import {
  Form,
  FormInput,
  FormTextArea,
} from "sharepoint-golrang-design-system";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";

export const AddSuggestion = () => {
  const { onSubmit } = useSubmitSuggestion();
  const isLoading = useRecoilValue(submitLoadingState);

  const onCancelHandler = () => {
    return;
  };

  // useEffect(() => {
  //   return () => {
  //     setLoading(false);
  //   };
  // }, []);
  return (
    <>
      <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
        پیشنهاد دهنده
      </span>
      <Row gutter={24}>
        <Col md={24} sm={24}>
          <Recommender />
        </Col>
      </Row>
      <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
        مشخصات محصول
      </span>
      <Form name="AddSuggestionForm" onFinish={onSubmit}>
        <Row gutter={24} className="mb-5">
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              name="Material"
              type="text"
              label="نام ماده یا مواد موثره"
              placeholder="ماده موثره اصلی"
            />
          </Col>

          <Col md={24} sm={24}>
            <Material />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <PharmaceuticalForms />
          </Col>
          <Col md={12} sm={24}>
            <OtherPharmaceuticalForms />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              label="نام برند اصلی"
              name="BrandName"
              placeholder="نام برند اصلی"
            />
          </Col>
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              label="نام شرکت سازنده"
              name="ManufacturerCompanyName"
              placeholder="نام شرکت سازنده"
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="مورد مصرف"
              name="Consumable"
              placeholder="مورد مصرف"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <TherapeuticField />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <TherapeuticFieldComment />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <OfferReason />
          </Col>

          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="OfferReasonComment"
              placeholder="توضیحات علت پیشنهاد"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار"
              name="ProductAdvatage"
              placeholder="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <FormTextArea<TKeyOfForm>
              label="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار"
              name="ProductWeaknesses"
              placeholder="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <Questions />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col sm={24}>
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="Comment"
              placeholder="توضیحات"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={4}>
            <UploadFile />
          </Col>
        </Row>
        <Button
          className="!inline-flex !items-center"
          key="cancel"
          onClick={onCancelHandler}
          disabled={isLoading}
        >
          انصراف
        </Button>

        <Button
          className="!inline-flex !items-center "
          key="submit"
          htmlType="submit"
          disabled={isLoading}
        >
          ثبت
        </Button>
      </Form>
    </>
  );
};
