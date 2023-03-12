import { useFieldArray } from 'react-hook-form';
import { Col, Row, Collapse } from 'antd';
import {
  Button,
  FormInput,
  ICDelete,
  ICPlus,
} from 'sharepoint-golrang-design-system';

export const Material = () => {
  const { fields, append, remove } = useFieldArray({
    name: 'materials',
  });

  const { Panel } = Collapse;

  return (
    <>
      <Collapse>
        <Panel header="اجزاء ثانویه" key="1">
          <Button
            className="!inline-flex !items-center btn btn-danger"
            htmlType="button"
            onClick={() => append({})}
          >
            <ICPlus className="w-4" />
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
                <Button
                  className="!inline-flex !items-center btn btn-danger"
                  htmlType="button"
                  onClick={() => remove(index)}
                >
                  <ICDelete className="w-4" />
                </Button>
              </Col>
            </Row>
          ))}
        </Panel>
      </Collapse>
    </>
  );
};
