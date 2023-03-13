import { listName } from "constant";
import { addListItem, batchAddItemstoList } from "services/general/pnp/pnpjs";
import { TMaterial, TSuggestion } from "types/suggestion/suggestion.types";

export type TAddNewSuggestion = Omit<TSuggestion, "OfferReasonId"> & {
  OfferReasonId: { results: [number] };
};

export type TAddNewMaterialsSuggestion = {
  Materials: TMaterial[];
  SuggestionId: number;
};
export type TAddNewFileSuggestion = { file: any; SuggestionId: number };

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

export const addMaterialsSuggestion = async (
  payload: TAddNewMaterialsSuggestion
) => {
  const data = payload.Materials.map((i) => {
    return {
      SuggestionId: payload.SuggestionId,
      Title: i.Title,
    };
  });
  const res = await batchAddItemstoList(data, listName.materialDetails);
  return res;
};

export const addFileSuggestion = async (payload: TAddNewFileSuggestion) => {
  if (payload?.file.fileList !== undefined) {
    // const data = {
    //   folderRelativeUrl: filePath,
    //   url: new Date().getTime().toString() + payload?.file.fileList[0].name,
    //   content: payload?.file.fileList[0].originFileObj,
    //   parameters: { Overwrite: true },
    // };
    // const getfile = await addFileToDocumentLibrary(data);
    // const insertedItem = await getfile?.file
    //   .select('ListItemAllFields/Id')
    //   .expand('ListItemAllFields')
    //   .get<{ ListItemAllFields: { Id: number } }>();
    // updateListItem(
    //   { GharardadHazineId: payload.SuggestionId },
    //   insertedItem?.ListItemAllFields.Id!,
    //   listName.suggestionDocument
    // ).then(() => {
    // });
  }
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
