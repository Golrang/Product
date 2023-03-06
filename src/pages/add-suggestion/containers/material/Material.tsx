import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Col, Row, Collapse } from 'antd';
import { Button, FormInput } from 'components';

export const Material = () => {
  const { fields, append, remove } = useFieldArray({
    name: 'materials',
  });

  const { Panel } = Collapse;

  return (
    <>
      <Collapse>
        <Panel header="اجزاء ثانویه" key="1">
          <Button htmlType="button" onClick={() => append({})}>
            add
          </Button>

          {fields.map((item, index) => (
            <Row gutter={24}>
              <Col md={6}>
                <FormInput
                  type="string"
                  name={`material.${index}`}
                  placeholder="اجزاء ثانویه"
                />
              </Col>

              <Col md={2}>
                <Button htmlType="button" onClick={() => remove(index)}>
                  remove
                </Button>
              </Col>
            </Row>
          ))}
        </Panel>
      </Collapse>
    </>
  );
};
