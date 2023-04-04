import { TSuggestion } from "types/suggestion/suggestion.types";
import { getListItemByFilter } from "services/general/pnp/pnpjs";
import { listName } from "constant";

export const getProductsSuggestion = () => {
  return getListItemByFilter<TSuggestion[]>(listName.productSuggestion, {
    filter: `Id eq 35`,
    select:
      "*, PharmaceuticalForm/Id,PharmaceuticalForm/Title,OtherPharmaceuticalForm/Id,OtherPharmaceuticalForm/Title,TherapeuticField/Id,TherapeuticField/Title,OfferReason/Id,OfferReason/Title",
    expand:
      "PharmaceuticalForm,OtherPharmaceuticalForm,TherapeuticField,OfferReason",
  });
};
