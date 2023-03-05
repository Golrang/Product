import { Skeleton, Divider } from 'antd';

export const TableLoading = () => {
  return (
    <div className="border-[#0000000f] border-[1px] rounded-sm p-3">
      <Skeleton.Button active className="" block={true} size="large" />
      <Divider className="!mb-3 !mt-3" />
      {[...Array(5)].map((_, index) => (
        <Skeleton.Button
          active
          className="mb-1"
          block={true}
          size="small"
          key={index}
        />
      ))}
    </div>
  );
};
