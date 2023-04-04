import { getUserInfo } from "services/general/user-info/userInfo.service";
import { TEmployee } from "types/employee/employee.types";
import axios from "utils/axiosBase";
import { TSuggestion } from "~/types/suggestion/suggestion.types";

const { userInfo } = getUserInfo();

const getAllActivateUserQuery = async () =>
  await axios
    .get(
      `https://portal-api-dev.gig.services/api/SharepointBase/Employee?CCompanyId=${userInfo.companyID}&WorkPlaceId=${userInfo.workPlaceId}`
    )
    .then((res) => res.data);

export const getAllEmployee = async (): Promise<{
  data: TEmployee[];
}> => {
  return await getAllActivateUserQuery();
};

const getAllCompanyUsers = async (defaultValues: TSuggestion | undefined) =>
  await axios
    .get(
      `https://portal-api-dev.gig.services/api/SharepointBase/Employee?CCompanyId=${defaultValues?.CompanyId}`
    )
    .then((res) => res.data);

export const getEmployeeInfo = async (
  defaultValues: TSuggestion | undefined
): Promise<{
  data: TEmployee[];
}> => {
  return await getAllCompanyUsers(defaultValues);
};
