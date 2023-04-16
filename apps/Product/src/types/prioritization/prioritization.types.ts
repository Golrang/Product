export type TPrioritization = {
  Id: number;
  Title: string;
  SuggestionId: number;
  PriorityId: number;
  PostponementDate: string | null;
  Comment: string;
  ActionId: number;
};

export type TPrioritizationForm = Omit<TPrioritization, "Id" | "Title"> & {
  File: any;
};
export type TKeyOfFormPrioritization = keyof TPrioritization;
