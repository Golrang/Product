import { Col, Row } from 'antd';
import { Form, FormInput, FormTextArea } from 'components';
import { OtherPharmaceuticalForms } from './containers/other-pharmaceutical-forms';
import { PharmaceuticalForms } from './containers/pharmaceutical-forms';
import { Recommender } from './containers/recommender';
import { TherapeuticField } from './containers/therapeutic-field';

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
          <Col md={24} sm={24}>
            <TherapeuticField />
          </Col>
        </Row>
      </Form>
    </>
  );
};
