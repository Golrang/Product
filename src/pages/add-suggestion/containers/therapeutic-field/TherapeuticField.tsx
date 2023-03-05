import { FormTextArea } from 'sharepoint-golrang-design-system';
import { TherapeuticFieldRadio } from './TherapeuticFieldRadio';

export const TherapeuticField = () => {
  return (
    <>
      <TherapeuticFieldRadio />
      <FormTextArea
        name="TherapeuticFieldComment"
        label="توضیحات"
        placeholder="توضیحات حوزه درمانی"
      />
    </>
  );
};

export default TherapeuticField;
