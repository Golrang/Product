import { Radio } from 'components';

import { useGetTherapeuticField } from '../../hooks/useGetTherapeuticField';

export const TherapeuticFieldRadio = () => {
  const { data } = useGetTherapeuticField();

  if (data && data !== undefined)
    return <Radio name="TherapeuticFieldId" options={data} />;
  return null;
};

export default TherapeuticFieldRadio;
