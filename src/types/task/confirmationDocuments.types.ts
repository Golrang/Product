import {TTableItems} from 'types/table/table.types'

export type TconfirmationDocuments = {
    Id: number;
    Title: string;
    Creator: string;
    UploadDate: string;
    Download: string;
}

export type TTableconfirmationDocuments = TconfirmationDocuments & TTableItems