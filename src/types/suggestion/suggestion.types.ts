export type TSuggestion = {
  Id: number;
  CompanyId: string;
  EmployeeId: string;
  Material: string; //ماده موثره
  PharmaceuticalFormId: number; //شکل دارویی
  OtherPharmaceuticalFormId: number; //سایر اشکال دارویی
  PharmaceuticalForm_Other: string;
  OtherPharmaceuticalForm_Other: string;
  BrandName: string; //برند
  ManufacturerCompanyName: string; // شرکت سازنده
  Consumable: string; //مورد مصرف
  TherapeuticFieldId: number; //حوزه درمانی
  TherapeuticFieldComment: string;
  OfferReasonId: number; //دلیل پیشنهاد
  OfferReasonComment: string;
  ProductAdvatage: string; //مزیت محصول
  ProductWeaknesses: string; //معایب محصول
  SimilarPharmaceuticalForm: boolean; //سوال فرم
  SimilarTherapeuticField: boolean; //سوال حوزه درمانی
  SimilarConsumable: boolean; //سوال مورد مصرف
  Comment: string; //توضیحات
  Created: string; //تاریخ ایجاد
  Modified: string; //تاریخ ایجاد
};

export type TKeyOfForm = keyof TSuggestion