// import { listName } from 'constant';
// import { getListItemByFilter } from '../general/pnp/pnpjs';
// import { TtherapeuticField } from 'types/therapeutic-field/therapeuticField.types';

// export const getAllTherapeuticField = async (): Promise<
//   TtherapeuticField[]
// > => {
//   const data = await getListItemByFilter<TtherapeuticField[]>(
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




