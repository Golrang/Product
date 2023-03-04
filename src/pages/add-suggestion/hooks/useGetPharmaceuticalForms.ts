// import { message } from 'antd';
import { useQuery } from '@tanstack/react-query';
// import { useSetRecoilState } from 'recoil';
// import { FormInput } from 'sharepoint-golrang-design-system';
// import { pharmaceuticalFormOtherState } from 'recoil-store/add-suggestion/pharmaceuticalFormsState';
import { getAllPharmaceuticalForms } from 'services/pharmaceutical-forms/allPharmaceuticalForms.service';
import { TpharmaceuticalForm } from 'types/pharmaceutical-form/pharmaceuticalForm.types';

export const useGetPharmaceuticalForms = () => {
// const setPharmaceuticalFormOther = useSetRecoilState(pharmaceuticalFormOtherState)

  const { data: allPharmaceuticalForms } = useQuery<
    TpharmaceuticalForm[],
    any,
    { label: any; value: any }[]
  >(['allPharmaceuticalForms'], getAllPharmaceuticalForms, {
    refetchOnWindowFocus: false,
    suspense: true,
    select: (items) =>
      items.map((item) => ({
        label: item.Title,
        value: item.Title,
      })),
  });

  const onChangeHandler = (e: string) => {
    if (e === 'سایر') {
        // setPharmaceuticalFormOther({ isOpen: true })
    }
  };

  return {
    allPharmaceuticalForms,
    onChangeHandler,
  };
};
 