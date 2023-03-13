import { listName } from "constant";
import { getListItemByFilter } from "../general/pnp/pnpjs";
import { TpharmaceuticalForm } from "types/pharmaceutical-form/pharmaceuticalForm.types";

export const getAllPharmaceuticalForms = async (): Promise<
  TpharmaceuticalForm[]
> => {
  const data = await getListItemByFilter<TpharmaceuticalForm[]>(
    listName.pharmaceuticalForm,
    {
      filter: "",
      select: "*",
      expand: "",
    }
  );
  return data;
};
