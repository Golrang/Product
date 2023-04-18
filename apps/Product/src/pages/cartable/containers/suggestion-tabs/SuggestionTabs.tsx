import { Tabs } from "antd";
import { MySuggestionsTable } from "../suggestion-table/mySuggestionsTable";
import { AllSuggestionsTable } from "../suggestion-table/allSuggestionsTable";
import { CheckSuggestionsTable } from "../suggestion-table/checkSuggestionsTable";

export const SuggestionTabs = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: <span>پیشنهادات من</span>,
            key: "1",
            children: <MySuggestionsTable />,
          },
          {
            label: <span>بررسی پیشنهادات</span>,
            key: "2",
            children: <CheckSuggestionsTable />,
          },
          {
            label: <span>همه پیشنهادات</span>,
            key: "3",
            children: <AllSuggestionsTable />,
          },
        ]}
      />
    </>
  );
};
