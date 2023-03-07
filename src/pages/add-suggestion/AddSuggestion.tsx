import { Col, Row } from 'antd';
import { Form, FormInput, FormTextArea } from 'components';
import { Material } from './containers/material';
import { OfferReason } from './containers/offer-reason';
import { OtherPharmaceuticalForms } from './containers/other-pharmaceutical-forms';
import { PharmaceuticalForms } from './containers/pharmaceutical-forms';
import { Recommender } from './containers/recommender';
import { TherapeuticField } from './containers/therapeutic-field';
import { TherapeuticFieldComment } from './containers/therapeutic-field-comment';
import { TKeyOfForm } from 'types/suggestion/suggestion.types'

export const AddSuggestion = () => {
  return (
    <>
      <Form name="AddSuggestionForm" onSubmit={() => {}}>
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <Recommender />
          </Col>
          <Col md={12} sm={24}>
            <FormInput
              name="Material"
              type="text"
              label="نام ماده یا مواد موثره"
              placeholder="ماده موثره اصلی"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <Material />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <PharmaceuticalForms />
          </Col>
          <Col md={12} sm={24}>
            <OtherPharmaceuticalForms />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <FormInput
              label="نام برند اصلی"
              name="BrandName"
              placeholder="نام برند اصلی"
            />
          </Col>
          <Col md={12} sm={24}>
            <FormInput
              label="نام شرکت سازنده"
              name="ManufacturerCompanyName"
              placeholder="نام شرکت سازنده"
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <FormTextArea
              label="مورد مصرف"
              name="Consumable"
              placeholder="مورد مصرف"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <TherapeuticField />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <TherapeuticFieldComment />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <OfferReason />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="OfferReasonComment"
              placeholder="توضیحات علت پیشنهاد"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
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
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="Comment"
              placeholder="توضیحات"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
