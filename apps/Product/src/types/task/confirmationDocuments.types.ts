import { TTableItems } from "types/table/table.types";

export type TconfirmationDocuments = {
  // Id: number;
  // Title: string;
  // Creator: string;
  // UploadDate: string;
  // Download: string;

  File?: {
    Name: string;
    ServerRelativeUrl: string;
  };
  Id: number;
  Title?: string;
  SuggestionId: number;
  PrioritizationId?: number;
  EvaluationStudiesId?: number;
  Created: string;
  // AuthorId: 14;
};

export type TTableconfirmationDocuments = TconfirmationDocuments &
  TTableItems & {
    Download: any;
  };

// [
//   {
//     uid: item.FileId,
//     name: item?.File?.Name,
//     status: 'done',
//     url:
//       fosUrl +
//       '/' +
//       listName.gharardadHazinePhoto +
//       '/' +
//       item?.File?.Name,
//   },
// ]

//  // @ts-ignore
//  defaultFileList={item.Image}
