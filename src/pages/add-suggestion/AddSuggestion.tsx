import React from 'react';
import {Form, FormInput} from "sharepoint-golrang-design-system"
import { Col, Row } from 'antd'

function AddSuggestion() {
  return (<>
  <Form name="AddSuggestionForm">
    <Row gutter={24}>
      <Col md={12} sm={24}>
        <FormInput name="Material" type="text" label="نام ماده یا مواد موثره" placeholder="ماده موثره اصلی"/>
      </Col>
    </Row>
  </Form>
  </>);
}

export default AddSuggestion;
