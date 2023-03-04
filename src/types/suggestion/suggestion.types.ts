export type TSuggestion = {
  Id: number;
  CompanyId: string;
  EmployeeId: string;
  Material: string;
  PharmaceuticalFormId: number;
  OtherPharmaceuticalFormId: number;
  PharmaceuticalForm_Other: string;
  OtherPharmaceuticalForm_Other: string;
  BrandName: string;
  ManufacturerCompanyName: string;
  Consumable: string;
  TherapeuticFieldId: number;
  TherapeuticFieldComment: string;
  OfferReasonId: number;
  OfferReasonComment: string;
  ProductAdvatage: string;
  ProductWeaknesses: string;
  SimilarPharmaceuticalForm: boolean;
  SimilarTherapeuticField: boolean;
  SimilarConsumable: boolean;
  Comment: string;
};
