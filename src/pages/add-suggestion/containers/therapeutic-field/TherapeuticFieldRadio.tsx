import { FormRadio } from 'sharepoint-golrang-design-system';

import { useGetTherapeuticField } from '../../hooks/useGetTherapeuticField';

export const TherapeuticFieldRadio = () => {
  const { data } = useGetTherapeuticField();

  if (data && data !== undefined)
    return <FormRadio name="TherapeuticFieldId" options={data} />;
  return null;
};

export default TherapeuticFieldRadio;
