import { filePath, listName } from "~/constant";
import { addFileToDocumentLibrary, updateListItem } from "../general/pnp/pnpjs";

export type TAddNewFileFinalReview = {
  file: any;
  FinalReviewId: number;
  SuggestionId: number;
};

export const addFileFinalReview = async (payload: TAddNewFileFinalReview) => {
  if (payload?.file.fileList !== undefined) {
    const data = {
      folderRelativeUrl: filePath,
      url: new Date().getTime().toString() + payload?.file.fileList[0].name,
      content: payload?.file.fileList[0].originFileObj,
      parameters: { Overwrite: true },
    };
    const getfile = await addFileToDocumentLibrary(data);
    if (getfile) {
      const insertedItem = await getfile.file
        .select("ListItemAllFields/Id")
        .expand("ListItemAllFields")
        .get<{ ListItemAllFields: { Id: number } }>();
      updateListItem(
        {
          FinalReviewId: payload.FinalReviewId,
          SuggestionId: payload.SuggestionId,
        },
        insertedItem.ListItemAllFields.Id,
        listName.suggestionDocument
      ).then(() => {});
    }
  }
};
