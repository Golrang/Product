import React, { Suspense } from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { SuggestionTable } from "../suggestion-table";
import { TableLoading } from "components/table-loading";
import { useGetContractors } from "pages/cartable/hooks/useCartable";
import { columns } from "../suggestion-table/suggestionTableColumn";
import { getUserInfo } from "services/general/user-info/userInfo.service";

const { userInfo } = getUserInfo();
export const SuggestionTabs = () => {
  const { data, error } = useGetContractors();
  const { columnsForMe, columnsForCheck, columnsForAll } = columns();
  const tabData = [
    {
      title: "پیشنهادات من",
      icon: AppleOutlined,
      column: columnsForMe,
      datatable: data?.filter(
        (i) =>
          i.EmployeeId === userInfo.employeeId &&
          i.CompanyId === userInfo.companyID
      ),
      eroros: error,
    }, //for me
    {
      title: "بررسی پیشنهادات",
      icon: AndroidOutlined,
      column: columnsForCheck,
      datatable: data?.filter((i) => i.EmployeeId !== userInfo.employeeId),
      eroros: error,
    }, //for check
    {
      title: "همه پیشنهادات",
      icon: AppleOutlined,
      column: columnsForAll,
      datatable: data,
      eroros: error,
    }, //for all
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="3"
        items={tabData.map((data, i) => {
          const id = String(i + 1);

          return {
            label: (
              <span>
                <data.icon />
                {data.title}
              </span>
            ),
            key: id,
            children: (
              <Suspense fallback={<TableLoading />}>
                <SuggestionTable
                  datatable={data.datatable}
                  errors={data.eroros}
                  columns={data.column}
                />
              </Suspense>
            ),
          };
        })}
      />
    </>
  );
};
