import { Col, Row } from 'antd';
import {
  Form,
  FormInput,
  FormTextArea,
} from 'sharepoint-golrang-design-system';
import { Recommender } from './containers/recommender';

export const AddSuggestion = () => {
  return (
    <>
      <Form name="AddSuggestionForm">
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
      </Form>
    </>
  );
};
