import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Col, Row, Collapse } from 'antd';
import { Button, FormInput } from 'components';
import { ICDelete, ICPlus, ICUpload } from 'icons'

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
            <ICPlus />
          </Button>

          {fields.map((item, index) => (
            <Row key={item.id} gutter={24}>
              <Col md={6}>
                <FormInput
                  type="string"
                  name={`material.${index}`}
                  placeholder="اجزاء ثانویه"
                />
              </Col>

              <Col md={2}>
                <Button htmlType="button" onClick={() => remove(index)}>
                  <ICDelete />
                </Button>
              </Col>
            </Row>
          ))}
        </Panel>
      </Collapse>
    </>
  );
};
