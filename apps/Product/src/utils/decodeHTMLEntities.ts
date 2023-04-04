//.................Remove html tags from rich text of col sharepoint list.......................................
export const decodeEntities = (str: string) => {
  // this prevents any overhead from creating the object each time
  if (str && typeof str === "string") {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
  }
  return str;
};
