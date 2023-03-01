import React from 'react';
import { Form, FormInput } from "sharepoint-golrang-design-system"
import { Col, Row } from 'antd'
import { Recommender } from './containers/recommender';

export const AddSuggestion = () => {
  const submit = () => {
  }
  return <>
    <Form name='AddSuggestionForm' onSubmit={submit}>
      <Row gutter={24}>
        <Col md={24} sm={24}>
          <Recommender />
        </Col>
        <Col md={12} sm={24}>
          <FormInput name="Material" type="text" label="نام ماده یا مواد موثره" placeholder="ماده موثره اصلی" />
        </Col>
      </Row>
    </Form>
  </>
}
