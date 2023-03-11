import { IAddUsingPathProps } from '@pnp/sp/files';

export type TPnPParams = {
  select: string;
  expand: string;
  filter: string;
};

export type TDocumentLibraryFile = {
  folderRelativeUrl: string;
  url: string;
  content: string | ArrayBuffer | Blob;
  parameters?: IAddUsingPathProps | undefined;
};
