import { getUsersByGroupId } from "~/services/GroupUsers/getGroupUsers";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "~/constant/react-query-keys";
import { TUserGroup } from "~/types/userGroup/userGroup.types";

export const useGetDevExpertGroup = (id: number) => {
  const { data } = useQuery<TUserGroup[]>(
    [queryKeys.getUsersByGroupId],
    () => getUsersByGroupId(id),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    }
  );
  return { data };
};
