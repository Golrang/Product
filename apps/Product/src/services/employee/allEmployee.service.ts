import { getUserInfo } from 'services/general/user-info/userInfo.service';
import { TEmployee } from 'types/employee/employee.types';
import axios from 'utils/axiosBase';

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
