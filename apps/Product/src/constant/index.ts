export const listName = {
  pharmaceuticalForm: "GPI_PS_PharmaceuticalForms",
  productSuggestion: "GPI_PS_ProductSuggestion",
  therapeuticField: "GPI_PS_TherapeuticField",
  offerReason: "GPI_PS_OfferReason",
  materialDetails: "GPI_PS_MaterialDetail",
  suggestionDocument: "GPI_PS_SuggestionDocument",
  priority: "GPI_PS_Priority",
  offerResult: "GPI_PS_OfferResult",
};

export const dateFormat = "YYYY/MM/DD";

export const pharmaceuticalFormsOtherId = 8; //مقدار id سایر PharmaceuticalForms

export const filePath =
  process.env.NODE_ENV == "development"
    ? `/psstest/${listName.suggestionDocument}`
    : `/productsuggestion/${listName.suggestionDocument}`;
