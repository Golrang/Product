import { useViewProductSuggestion } from "../../hooks/useViewProductSuggestion";
import { Col, Row, Descriptions } from "antd";
import { Form } from "sharepoint-golrang-design-system";

import { Recommender } from "pages/add-suggestion/containers/recommender";

export const ViewProductSuggestion = () => {
  const { defaultValues } = useViewProductSuggestion();
  const onSubmit = () => {};
  const onFinish = () => {};
  return (
    <>
      <Form name="AddSuggestionForm" {...{ onSubmit, defaultValues, onFinish }}>
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

        <Descriptions>
          <Descriptions.Item label="نام ماده یا مواد موثره">
            {defaultValues?.Material}
          </Descriptions.Item>
          <Descriptions.Item label="شکل دارویی">
            {defaultValues?.PharmaceuticalForm_Other}
          </Descriptions.Item>
          <Descriptions.Item label="سایر اشکال دارویی">
            {defaultValues?.PharmaceuticalForm?.Title}
          </Descriptions.Item>
          <Descriptions.Item label="نام برند اصلی">
            {defaultValues?.BrandName}
          </Descriptions.Item>
          <Descriptions.Item label="نام شرکت سازنده">
            {defaultValues?.ManufacturerCompanyName}
          </Descriptions.Item>
          <Descriptions.Item label="مورد مصرف">
            {defaultValues?.Consumable}
          </Descriptions.Item>
          <Descriptions.Item label="حوزه درمانی">
            {defaultValues?.TherapeuticField?.Title}
          </Descriptions.Item>
          <Descriptions.Item label="توضیحات">
            {defaultValues?.TherapeuticFieldComment}
          </Descriptions.Item>
          {/* <Descriptions.Item label="علت پیشنهادی">
            {defaultValues?.OfferReason?.Title}
          </Descriptions.Item> */}
          {/* change by somaye */}
          <Descriptions.Item label="توضیحات">
            {defaultValues?.OfferReasonComment}
          </Descriptions.Item>
          <Descriptions.Item label="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار">
            {defaultValues?.ProductAdvatage}
          </Descriptions.Item>
          <Descriptions.Item label="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار">
            {defaultValues?.ProductWeaknesses}
          </Descriptions.Item>
          <Descriptions.Item label="آیا محصول با فرم دارویی مشابه توسط شرکت تولید شده است؟">
            {defaultValues?.SimilarPharmaceuticalForm && //change by somaye
              defaultValues?.SimilarPharmaceuticalForm.valueOf()}
          </Descriptions.Item>
          <Descriptions.Item label="آیا محصول با حوزه درمانی مشابه توسط شرکت تولید شده است؟">
            {defaultValues?.SimilarTherapeuticField && //change by somaye
              defaultValues?.SimilarTherapeuticField.valueOf()}
          </Descriptions.Item>
          <Descriptions.Item label="آیا محصول با مورد مصرف مشابه توسط شرکت تولید شده است؟">
            {defaultValues?.SimilarConsumable && //change by somaye
              defaultValues?.SimilarConsumable.valueOf()}
          </Descriptions.Item>
          <Descriptions.Item label="توضیحات">
            {defaultValues?.Comment}
          </Descriptions.Item>
        </Descriptions>

        {/* <Row gutter={24}>
          <Col md={12} sm={24}>
          <FormInput
              name="material.1"
              type="text"
              label="اجزاء ثانویه"
              disabled
            />
          </Col>
        </Row> */}
        <Row gutter={24}>
          <Col md={4}>{/* <UploadFile /> */}</Col>
        </Row>
      </Form>
    </>
  );
};
