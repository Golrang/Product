import { Col } from "antd";
import { FormInput } from "sharepoint-golrang-design-system";
import { getUserInfo } from "../../../../services/general/user-info/userInfo.service";

const { userInfo } = getUserInfo();

const lable = [
  { lable: "نام و نام خانوادگی", name: userInfo.userFarsiName },
  { lable: "سمت", name: userInfo.position },
  { lable: "واحد سازمانی", name: userInfo.departman },
  { lable: "نام شرکت", name: userInfo.companyName },
];

export const Recommender = () => {
  return (
    <div className="md:flex sm:block">
      {lable.map((item) => {
        return (
          <Col md={6} sm={24} key={item.name}>
            <FormInput
              label={item.lable}
              name={item.name ?? ""}
              key={item.lable}
              disabled
              className="!text-black "
            />
          </Col>
        );
      })}
    </div>
  );
};
