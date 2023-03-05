import { FormTextArea, FormRadio } from 'sharepoint-golrang-design-system';
import { Col, Row } from 'antd';
import { useGetTherapeuticField } from '../../hooks/useGetTherapeuticField';

export const TherapeuticField = () => {
  const { data } = useGetTherapeuticField();
  console.log(data);

  if (data && data !== undefined)
    return (
      <Row gutter={24}>
        <Col md={24} sm={24}>
          <FormRadio name="TherapeuticFieldId" options={data} />
          <FormTextArea
            name="TherapeuticFieldComment"
            label="توضیحات"
            placeholder="توضیحات حوزه درمانی"
          />
        </Col>
      </Row>
    );
  return null;
};

export default TherapeuticField;
