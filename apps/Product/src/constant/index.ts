export const listName = {
  pharmaceuticalForm: "GPI_PS_PharmaceuticalForms",
  productSuggestion: "GPI_PS_ProductSuggestion",
  therapeuticField: "GPI_PS_TherapeuticField",
  offerReason: "GPI_PS_OfferReason",
  materialDetails: "GPI_PS_MaterialDetail",
  suggestionDocument: "GPI_PS_SuggestionDocument",
  priority: "GPI_PS_Priority",
};

export const pharmaceuticalFormsOtherId = 8; //مقدار id سایر PharmaceuticalForms

export const filePath =
  process.env.NODE_ENV == "development"
    ? `/psstest/${listName.materialDetails}`
    : `/productsuggestion/${listName.materialDetails}`;
