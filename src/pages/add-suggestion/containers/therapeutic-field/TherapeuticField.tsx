import { FormTextArea } from 'components';
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
