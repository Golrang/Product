export type TSuggestion = {
  Id: string;
  CompanyId: string;
  EmployeeId: string;
  Material: string;
  PharmaceuticalForm: number;
  OtherPharmaceuticalForm: number;
  PharmaceuticalForm_Other: string;
  OtherPharmaceuticalForm_Other: string;
  BrandName: string;
  ManufacturerCompanyName: string;
  Consumable: string;
  TherapeuticField: number;
  TherapeuticFieldComment: string;
  OfferReason: number;
  OfferReasonComment: string;
  ProductAdvatage: string;
  ProductWeaknesses: string;
  SimilarPharmaceuticalForm: boolean;
  SimilarTherapeuticField: boolean;
  SimilarConsumable: boolean;
  Comment: string;
};
