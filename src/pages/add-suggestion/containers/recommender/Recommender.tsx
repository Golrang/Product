import { Col, Descriptions } from 'antd';
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
    <div className="md:flex sm:block">
      {lable.map((item) => {
        return (
          <>
            <Col md={6} sm={24}>
              <RecommenderDescriptions type="add" userInfo={item} />
              {/* <FormInput
                label={item.lable}
                name={item.name ?? ''}
                key={item.lable}
                disabled
                // defaultValue={item.name}
                className="!text-black "
              /> */}
            </Col>
          </>
        );
      })}
    </div>
  );
};

export const RecommenderDescriptions = ({
  type,
  userInfo,
}: {
  type: 'add' | 'edit';
  userInfo: { lable: string; name: string };
}) => {
  if (type === 'edit') return <>Recommender editttttt</>;
  if (type === 'add')
    return (
      <Descriptions>
        <Descriptions.Item
          label={userInfo.lable}
          contentStyle={{ fontWeight: 500 }}
        >
          {userInfo.name}
        </Descriptions.Item>
      </Descriptions>
    );
  return null;
};
