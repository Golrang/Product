import { getUsersByGroupId } from "~/services/GroupUsers/getGroupUsers";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "~/constant/react-query-keys";
import { TUserGroup } from "~/types/userGroup/userGroup.types";
import { groupIds } from "~/constant";
import { useSetRecoilState } from "recoil";
import { countEvaluationStudiesGroupState } from "~/recoil-store/evaluation-studies/EvaluationStudiesGroupState";

export const useGetDevExpertHeadGroup = () => {
  const { data } = useQuery<TUserGroup[]>(
    [queryKeys.getDevExpertHeadGroup],
    () => getUsersByGroupId(groupIds.developHeadGroup),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data };
};

export const useGetDevExpertGroup = () => {
  const { data } = useQuery<TUserGroup[]>(
    [queryKeys.getDevExpertGroup],
    () => getUsersByGroupId(groupIds.developExpertGroup),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data };
};

export const useGetEvaluationStudiesGroup = () => {
  const setCountEvaluationStudiesGroupState = useSetRecoilState(
    countEvaluationStudiesGroupState
  );

  const { data } = useQuery<TUserGroup[]>(
    [queryKeys.getEvaluationStudiesGroup],
    () => getUsersByGroupId(groupIds.evaluationStudiesGroup),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setCountEvaluationStudiesGroupState(data.length);
      },
    }
  );
  return { data };
};
