import { TableError } from "components/table-error";
import { Table } from "sharepoint-golrang-design-system";
import { TColumn } from "sharepoint-golrang-design-system";
import { TSuggestionTable } from "types/suggestion/suggestionTable.types";
import dayjs from "dayjs";
import { useGetSuggestion } from "pages/cartable/hooks/useCartable";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "~/constant/react-query-keys";
import { TUserGroup } from "~/types/userGroup/userGroup.types";
import { getUserInfo } from "~/services/general/user-info/userInfo.service";
import { TStep } from "~/types/step/step.types";
import { allSteps } from "~/constant";
import { TSuggestion } from "~/types/suggestion/suggestion.types";
import { ViewSuggestion } from "../view-suggestion-button";
import { CheckSuggestion } from "../check-suggestion-button";

const columnsForCheck: TColumn<TSuggestionTable>[] = [
  {
    title: "ردیف",
    dataIndex: "row",
    key: "row",
    align: "center",
    width: 20,
  },
  {
    title: "کدپیشنهاد",
    dataIndex: "Title",
    key: "Title",
  },
  {
    title: "پیشنهاد دهنده ",
    dataIndex: "Owner",
    key: "Owner",
  },
  {
    title: "تاریخ ثبت پیشنهاد",
    dataIndex: "Created",
    key: "Created",
    render: (text: string) => dayjs(text).format("YYYY/MM/DD"),
  },
  {
    title: "مرحله جاری ",
    dataIndex: "Consumable",
    key: "Consumable",
  },
  {
    title: "تاریخ آخرین تغییر",
    dataIndex: "Modified",
    key: "Modified",
    render: (text: string) => dayjs(text).format("YYYY/MM/DD"),
  },

  {
    title: "عملیات",
    align: "center",
    width: 110,
    render: (_, record: TSuggestion) => {
      return (
        <>
          <ViewSuggestion id={record.Id ?? 0} />
          <CheckSuggestion id={record.Id} />
        </>
      );
    },
  },
];

export const CheckSuggestionsTable = () => {
  const queryClient = useQueryClient();
  const { userInfo } = getUserInfo();

  const selectedStepQuery: TStep[] | undefined = queryClient.getQueryData(
    [queryKeys.getAllStep],
    {
      exact: false,
    }
  );

  const selectedDevExpertHeadGroupQuery: TUserGroup[] | undefined =
    queryClient.getQueryData([queryKeys.getDevExpertHeadGroup], {
      exact: false,
    });
  const selectedDevExpertHeadGroup = selectedDevExpertHeadGroupQuery?.find(
    (item) => item.Email === userInfo.userEmail
  );

  const selectedDevExpertGroupQuery: TUserGroup[] | undefined =
    queryClient.getQueryData([queryKeys.getDevExpertGroup], {
      exact: false,
    });
  const selectedDevExpertGroup = selectedDevExpertGroupQuery?.find(
    (item) => item.Email === userInfo.userEmail
  );

  const selectedEvaluationStudiesGroupQuery: TUserGroup[] | undefined =
    queryClient.getQueryData([queryKeys.getEvaluationStudiesGroup], {
      exact: false,
    });
  const selectedEvaluationStudiesGroup =
    selectedEvaluationStudiesGroupQuery?.find(
      (item) => item.Email === userInfo.userEmail
    );

  const { data, error } = useGetSuggestion();

  const steps: (number | undefined)[] = [];
  if (data && selectedStepQuery) {
    selectedDevExpertHeadGroup !== undefined &&
      steps.push(
        selectedStepQuery.find((i) => i.Id === allSteps.developmentExpertHead)
          ?.Id
      );
    selectedDevExpertGroup !== undefined &&
      steps.push(
        selectedStepQuery.find((i) => i.Id === allSteps.developmentExpert)?.Id
      );
    selectedEvaluationStudiesGroup !== undefined &&
      steps.push(
        selectedStepQuery.find((i) => i.Id === allSteps.evaluationStudies)?.Id
      );
  }

  if (error || !data) return <TableError />;

  return (
    <Table
      columns={columnsForCheck}
      dataSource={data.filter((i) => steps.includes(i.CurrentStepId))}
    />
  );
};
