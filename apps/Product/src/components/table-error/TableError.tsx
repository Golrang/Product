import { Title } from 'sharepoint-golrang-design-system';
// import { ICErrorOctagon } from 'sharepoint-golrang-design-system';

export const TableError = () => {
  return (
    <div className="border-[#0000000f] border-[1px] rounded-sm p-7 flex flex-col items-center justify-center">
      {/* <ICErrorOctagon className="w-10 text-red mb-3" /> */}
      <Title level={4}>خطایی در دریافت اطلاعات رخ داده است</Title>
    </div>
  );
};
