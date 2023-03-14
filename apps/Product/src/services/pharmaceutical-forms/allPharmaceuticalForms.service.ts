// import { listName } from 'constant';
// import { getListItemByFilter } from '../general/pnp/pnpjs';
// import { TpharmaceuticalForm } from 'types/pharmaceutical-form/pharmaceuticalForm.types';

// export const getAllPharmaceuticalForms = async (): Promise<
//   TpharmaceuticalForm[]
// > => {
//   const data = await getListItemByFilter<TpharmaceuticalForm[]>(
//     listName.pharmaceuticalForm,
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

export const getAllPharmaceuticalForms = () => {
  const data = [
    { Id: 32, Title: "قرص" },
    { Id: 33, Title: "کپسول" },
    { Id: 34, Title: "شربت" },
    { Id: 35, Title: "سایر" },
  ];
  return data;
};
