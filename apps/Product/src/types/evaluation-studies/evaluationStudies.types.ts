export type TEvaluationStudies = {
  Id: number;
  Title: string;
  SuggestionId: number;
  Comment: string;
  ActionId: number;
};

export type TEvaluationStudiesForm = Omit<
  TEvaluationStudies,
  "Id" | "Title"
> & {
  File: any;
};
export type TKeyOfFormEvaluationStudies = keyof TEvaluationStudies;
