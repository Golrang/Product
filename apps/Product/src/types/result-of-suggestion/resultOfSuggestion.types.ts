export type TResultOfSuggestion = {
  Id: number;
  Title: string;
  SuggestionId: number;
  PriorityId: number;
  ActionId: number;
  PostponementDate: string | null;
  Comment_Prioritization: string;
  Comment_EvaluationStudies: string;
  Comment_FinalReview: string;
  Evaluation_Num: number;
};
