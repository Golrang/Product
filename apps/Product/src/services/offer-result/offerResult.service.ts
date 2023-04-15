import { listName } from "constant";
import { getListItemByFilter } from "../general/pnp/pnpjs";
import { TOfferResult } from "types/offer-result/offerResult.types";

export const getOfferResult = async (): Promise<TOfferResult[]> => {
  const data = await getListItemByFilter<TOfferResult[]>(listName.offerResult, {
    filter: "",
    select: "*",
    expand: "",
  });

  return data;
};
