import { TStep } from "./../step/step.types";
import { TOfferReason } from "../offer-reason/offerReason.types";
import { TTherapeuticField } from "../therapeutic-field/therapeuticField.types";
import { TpharmaceuticalForm } from "../pharmaceutical-form/pharmaceuticalForm.types";
import { TAction } from "../action/action.types";
export type TSuggestion = {
  Id: number;
  Title?: string;
  CompanyId?: string;
  EmployeeId?: string;
  Material: string; //ماده موثره
  PharmaceuticalFormId?: number; //شکل دارویی
  OtherPharmaceuticalFormId?: number; //سایر اشکال دارویی
  PharmaceuticalForm?: TpharmaceuticalForm;
  OtherPharmaceuticalForm?: TpharmaceuticalForm;
  PharmaceuticalForm_Other: string;
  OtherPharmaceuticalForm_Other: string;
  BrandName: string; //برند
  ManufacturerCompanyName: string; // شرکت سازنده
  Consumable: string; //مورد مصرف
  TherapeuticFieldId?: number; //حوزه درمانی
  TherapeuticField?: TTherapeuticField;
  TherapeuticFieldComment: string;
  OfferReasonId: number[]; //دلیل پیشنهاد
  OfferReason?: TOfferReason[];
  OfferReasonComment: string;
  ProductAdvatage: string; //مزیت محصول
  ProductWeaknesses: string; //معایب محصول
  SimilarPharmaceuticalForm: boolean | null; //سوال فرم
  SimilarTherapeuticField: boolean | null; //سوال حوزه درمانی
  SimilarConsumable: boolean | null; //سوال مورد مصرف
  Comment: string; //توضیحات
  Created?: string; //تاریخ ایجاد
  Modified?: string; //تاریخ ایجاد
  ActionId?: number; //نوع عملیات
  Action?: TAction;
  CurrentStepId: number; //مرحله
  CurrentStep?: TStep;
};

export type TMaterial = {
  Title: string;
};
export type TSuggestionForm = Pick<
  TSuggestion,
  | "Title"
  | "CompanyId"
  | "EmployeeId"
  | "PharmaceuticalFormId"
  | "OtherPharmaceuticalFormId"
  | "PharmaceuticalForm_Other"
  | "OtherPharmaceuticalForm_Other"
  | "BrandName"
  | "ManufacturerCompanyName"
  | "Consumable"
  | "TherapeuticFieldId"
  | "TherapeuticFieldComment"
  | "Material"
  | "OfferReasonId"
  | "OfferReasonComment"
  | "ProductAdvatage"
  | "ProductWeaknesses"
  | "SimilarPharmaceuticalForm"
  | "SimilarTherapeuticField"
  | "SimilarConsumable"
  | "Comment"
> & {
  Materials: TMaterial[];
  File: any;
};

export type TKeyOfForm = keyof TSuggestionForm;
