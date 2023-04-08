import { Suspense } from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { MySuggestionsTable } from "../suggestion-table/mySuggestionsTable";
import { TableLoading } from "components/table-loading";
import { AllSuggestionsTable } from "../suggestion-table/allSuggestionsTable";
import { CheckSuggestionsTable } from "../suggestion-table/checkSuggestionsTable";

export const SuggestionTabs = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: (
              <span>
                <AppleOutlined />
                پیشنهادات من
              </span>
            ),
            key: "1",
            children: (
              <Suspense fallback={<TableLoading />}>
                <MySuggestionsTable />
              </Suspense>
            ),
          },
          {
            label: (
              <span>
                <AndroidOutlined />
                بررسی پیشنهادات
              </span>
            ),
            key: "2",
            children: (
              <Suspense fallback={<TableLoading />}>
                <CheckSuggestionsTable />
              </Suspense>
            ),
          },
          {
            label: (
              <span>
                <AppleOutlined />
                همه پیشنهادات
              </span>
            ),
            key: "3",
            children: (
              <Suspense fallback={<TableLoading />}>
                <AllSuggestionsTable />
              </Suspense>
            ),
          },
        ]}
      />
    </>
  );
};
