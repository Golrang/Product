// import { listName } from 'constant';
// import { getListItemByFilter } from '../general/pnp/pnpjs';
// import { TpharmaceuticalForm } from 'types/pharmaceutical-form/pharmaceuticalForm.types';

// export const getAllTherapeuticField = async (): Promise<
//   TpharmaceuticalForm[]
// > => {
//   const data = await getListItemByFilter<TpharmaceuticalForm[]>(
//     listName.therapeuticField,
//     {
//       filter: '',
//       select: '*',
//       expand: '',
//     }
//   );
//   console.log(data);
//   debugger;
//   return data;
// };

export const getAllTherapeuticField = () => {
    const data = [{Id:1, Title:'تقویت سیستم ایمنی'}, {Id:2, Title:'گوارش'}, {Id:3, Title:'تغذیه'}, {Id:4, Title:'سایر'}]
      return data;
    };




