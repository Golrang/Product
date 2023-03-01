import { FormInput } from 'sharepoint-golrang-design-system';
import { getUserInfo } from '../../../../services/general/user-info/userInfo.service';

const { userInfo } = getUserInfo();

const lable = [
  { lable: 'نام و نام خانوادگی', name: userInfo.userFarsiName },
  { lable: 'سمت', name: userInfo.position },
  { lable: 'واحد سازمانی', name: userInfo.departman },
  { lable: 'نام شرکت', name: userInfo.companyName },
];

export const Recommender = () => {
  return (
    <>
      <div className="orderer">
        {lable.map((item) => {
          return (
            <FormInput
              label={item.lable}
              name={item.name}
              key={item.lable}
              disabled
              defaultValue={item.name}
              className="!text-black"
            />
          );
        })}
      </div>
    </>
  );
};
