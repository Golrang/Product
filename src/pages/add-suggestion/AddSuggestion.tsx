import React from 'react';
import { Form, FormInput, FormTextArea } from "sharepoint-golrang-design-system"
import { Col, Row } from 'antd'
import { Recommender } from './containers/recommender';

export const AddSuggestion = () => {
  const submit = () => {
  }
  const data = [
    { name: 'brandName', lable: 'نام برند اصلی', placeHolder: 'نام برند اصلی' },
    { name: 'companyName', lable: 'نام شرکت سازنده', placeHolder: 'نام شرکت سازنده' }
  ]
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
      <Row gutter={24}>
        {data.map((item) => (
          <Col md={12} sm={24}>
            <FormInput label={item.lable} name={item.name} placeholder={item.placeHolder} />
          </Col>
        ))}
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <FormTextArea label='مورد مصرف' name='use' placeholder='مورد مصرف' autoSize={{ minRows: 4 }} />
        </Col>
      </Row>
    </Form>
  </>
}
