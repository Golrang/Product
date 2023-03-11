import { Col, Row } from 'antd';
import { FormSelect, Form } from 'components';
import { TKeyOfForm } from 'types/priority/priority.types';
import { useGetPriority } from '../../hooks/useGetPriority';
export const Priority = () => {
  const { allPriority } = useGetPriority();
  return (
    <>
      <Form name="FormPriority" onSubmit={() => console.log('asd')}>
        <Row gutter={24}>
          <Col md={12} sm={12}>
            <FormSelect<TKeyOfForm>
              name="Title"
              label="اولویت"
              mode="multiple"
              showSearch
              options={allPriority}
              filterOption={(input, option) =>
                (option?.label ?? '').toString().includes(input)
              }
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
