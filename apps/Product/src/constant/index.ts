export const listName = {
  pharmaceuticalForm: "GPI_PS_PharmaceuticalForms",
  productSuggestion: "GPI_PS_ProductSuggestion",
  therapeuticField: "GPI_PS_TherapeuticField",
  offerReason: "GPI_PS_OfferReason",
  materialDetails: "GPI_PS_MaterialDetail",
  suggestionDocument: "GPI_PS_SuggestionDocument",
  priority: "GPI_PS_Priority",
  offerResult: "GPI_PS_OfferResult",
  logSuggestion: "GPI_PS_Logs",
  action: "GPI_PS_Action",
  step: "GPI_PS_Step",
  flow: "GPI_PS_Flow",
  prioritization: "GPI_PS_Prioritization",
};

export const dateFormat = "YYYY/MM/DD";

export const pharmaceuticalFormsOtherId = 8; //مقدار id سایر PharmaceuticalForms

export const filePath =
  process.env.NODE_ENV == "development"
    ? `/psstest/${listName.suggestionDocument}`
    : `/productsuggestion/${listName.suggestionDocument}`;

export const groupIds = {
  developHeadGroup: 19, // گروه توسعه کسب و کار - رئیس
  developExpertGroup: 17, // گروه توسعه کسب و کار - کارشناس
  evaluationStudiesGroup: 18, // گروه مطالعات ارزیابی علمی-اقتصادی
};

export const allSteps = {
  recommender: 8, //پیشنهاد دهنده
  developmentExpert: 9, //توسعه کسب و کار- کارشناس
  developmentExpertHead: 10, //توسعه کسب و کار - رئیس
  evaluationStudies: 11, //مطالعات ارزیابی علمی - اقتصادی
  archive: 12, //آرشیو
  end: 13, //پایان
};

export const Actions = {
  temporaryRegistration: 1, //"ثبت موقت"
  saveSuggestion: 2, //ثبت پیشنهاد
  confirmation: 3, //تایید
  needToReconsider: 4, //نیاز به بررسی مجدد
  archive: 5, // آرشیو
  adjournment: 6, //تعویق
  returnToThePrioritizationStage: 7, //بازگشت به مرحله اولویت بندی
};
