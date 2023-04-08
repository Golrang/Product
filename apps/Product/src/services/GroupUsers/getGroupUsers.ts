//.................get all users of a group.......................................
import sp from "utils/pnp";
export const getUsersByGroupId = async (id: number) =>
  await sp.web.siteGroups.getById(id).users();
