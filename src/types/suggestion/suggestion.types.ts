export type TSuggestion = {
  Id?: number;
  Title?: string;
  CompanyId: string;
  EmployeeId: string;
  Material: string; //ماده موثره
  PharmaceuticalFormId: number; //شکل دارویی
  OtherPharmaceuticalFormId: number; //سایر اشکال دارویی
  PharmaceuticalForm?: {
    Id?: number;
    Title: string;
  };
  OtherPharmaceuticalForm?: {
    Id?: number;
    Title: string;
  };
  PharmaceuticalForm_Other: string;
  OtherPharmaceuticalForm_Other: string;
  BrandName: string; //برند
  ManufacturerCompanyName: string; // شرکت سازنده
  Consumable: string; //مورد مصرف
  TherapeuticFieldId: number; //حوزه درمانی
  TherapeuticField?: {
    Id?: number;
    Title: string;
  };
  TherapeuticFieldComment: string;
  OfferReasonId: [number]; //دلیل پیشنهاد
  OfferReason?: [
    {
      Id?: number;
      Title: string;
    }
  ];
  OfferReasonComment: string;
  ProductAdvatage: string; //مزیت محصول
  ProductWeaknesses: string; //معایب محصول
  SimilarPharmaceuticalForm: boolean; //سوال فرم
  SimilarTherapeuticField: boolean; //سوال حوزه درمانی
  SimilarConsumable: boolean; //سوال مورد مصرف
  Comment: string; //توضیحات
  Created?: string; //تاریخ ایجاد
  Modified?: string; //تاریخ ایجاد
};

export type TMaterial = {
  Title: string;
};
export type TSuggestionForm = Pick<
  TSuggestion,
  | 'Title'
  | 'CompanyId'
  | 'EmployeeId'
  | 'PharmaceuticalFormId'
  | 'OtherPharmaceuticalFormId'
  | 'PharmaceuticalForm_Other'
  | 'OtherPharmaceuticalForm_Other'
  | 'BrandName'
  | 'ManufacturerCompanyName'
  | 'Consumable'
  | 'TherapeuticFieldId'
  | 'TherapeuticFieldComment'
  | 'Material'
  | 'OfferReasonId'
  | 'OfferReasonComment'
  | 'ProductAdvatage'
  | 'ProductWeaknesses'
  | 'SimilarPharmaceuticalForm'
  | 'SimilarTherapeuticField'
  | 'SimilarConsumable'
  | 'Comment'
> & {
  Materials: TMaterial[];
  File: unknown;
};

export type TKeyOfForm = keyof TSuggestionForm;
