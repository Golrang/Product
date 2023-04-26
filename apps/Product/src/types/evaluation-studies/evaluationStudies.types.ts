export type TEvaluationStudies = {
  Id: number;
  Title: string;
  SuggestionId: number;
  Comment: string;
  ActionId: number;
  ResultOfSuggestionId: number;
  CompanyId: string;
  EmployeeId: string;
};

export type TEvaluationStudiesForm = Omit<
  TEvaluationStudies,
  "Id" | "Title"
> & {
  File: any;
};
export type TKeyOfFormEvaluationStudies = keyof TEvaluationStudies;
