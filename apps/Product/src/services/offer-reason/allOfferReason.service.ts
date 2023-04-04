import { listName } from "constant";
import { getListItemByFilter } from "../general/pnp/pnpjs";
import { TOfferReason } from "types/offer-reason/offerReason.types";

export const getAllOfferReason = async (): Promise<TOfferReason[]> => {
  const data = await getListItemByFilter<TOfferReason[]>(listName.offerReason, {
    filter: "",
    select: "*",
    expand: "",
  });
  return data;
};
