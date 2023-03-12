
import { listName } from 'constant';
import { addListItem } from 'services/general/pnp/pnpjs';
import { TSuggestion } from 'types/suggestion/suggestion.types';

export type TAddNewSuggestion = TSuggestion;

// Pick<
// TSuggestion,
//   | 'CompanyID'
//   | 'WorkPlaceId'
//   | 'GharardadeMarbutehId'
//   | 'GhazaId'
//   | 'SahmeSherkat'
//   | 'Hazineh'
//   | 'File'
// >

export type TUpdateSuggestion = TSuggestion;

// Pick<
// TSuggestion,
//   'Id' | 'GhazaId' | 'SahmeSherkat' | 'Hazineh' | 'File' | 'FileId'
// >

export type TDeleteNewSuggestion = TSuggestion;
// Pick<TSuggestion, 'Id'>

export const addNewSuggestion = async (payload: TAddNewSuggestion) => {
  const res = await addListItem(payload, listName.productSuggestion);
  return res;
};

// export const updateSuggestion = async (payload: TUpdateSuggestion[]) => {
//   //   for (let item of payload) {
//   //     if (item.File.file !== undefined && item.File.length > 0) {
//   //       const res = await fetch(window.location.origin + item.File[0].url);

//   //       const blob = await res.blob();

//   //       const myFile = new File([blob], 'image.jpg', { type: blob.type });
//   //       item.File = { fileList: [{ name: myFile.name, originFileObj: myFile }] };
//   //     }
//   //   }
//   //   const data = payload.map((i) => {
//   //     return {
//   //       GhazaId: i.GhazaId,
//   //       SahmeSherkat: i.SahmeSherkat,
//   //       Hazineh: i.Hazineh,
//   //       File: i.File,
//   //       FileId: i.FileId,
//   //     };
//   //   });
//   const res = await batchUpdateListItems(payload, listName.productSuggestion);
//   return res;
// };

// export const deleteSuggestion = async (payload: TDeleteNewSuggestion[]) => {
//   const res = await batchDeleteListItems(payload, listName.productSuggestion);
//   return res;
// };