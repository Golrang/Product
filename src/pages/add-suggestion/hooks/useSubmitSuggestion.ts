import { queryKeys } from '../../../constant/react-query-keys/index';
import { useSetRecoilState } from 'recoil';

import { TSuggestion } from 'types/suggestion/suggestion.types';
import { getUserInfo } from 'services/general/user-info/userInfo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  addNewSuggestion as addNewSuggestionService,
  // TAddNewSuggestion,
  // TUpdateSuggestion,
  // TDeleteNewSuggestion,
  // updateSuggestion as updateSuggestionService,
  // deleteSuggestion as deleteSuggestionService,
} from 'services/product-suggestion/productSuggestionSave.service';
import { message } from 'antd';
import { submitLoadingState } from 'recoil-store/general/submitLoading';

const { userInfo } = getUserInfo();

export const useSubmitSuggestion = (id?: number) => {
  console.log(userInfo);
  const queryClient = useQueryClient();
  const setLoading = useSetRecoilState(submitLoadingState);

  const selectedContractsQuery: TSuggestion[] | undefined =
    queryClient.getQueryData([queryKeys.getAllSuggestion, id], {
      exact: false,
    });

  const selectedContracts = selectedContractsQuery?.find(
    (item) => item.Id === id
  );

  const { mutateAsync: addNewSuggestion } = useMutation(
    addNewSuggestionService
  );

  // const { mutateAsync: updateExistSuggestion } = useMutation(
  //   updateSuggestionService
  // );

  // const { mutateAsync: deleteExistSuggestion } = useMutation(
  //   deleteSuggestionService
  // );

  //let
  // const updateList: TUpdateSuggestion[] = [];
  // const addList: TAddNewSuggestion = {} as TAddNewSuggestion;
  // const deleteList: TDeleteNewSuggestion[] = [];

  const onSubmit = async (state: TSuggestion) => {
    debugger;
    console.log(state);
    const addList = {
      CompanyId: userInfo.companyID,
      EmployeeId: userInfo.employeeId,
      Material: state.Material,
      PharmaceuticalFormId: 1,
      OtherPharmaceuticalFormId: 2,
      PharmaceuticalForm_Other: '',
      OtherPharmaceuticalForm_Other: '',
      BrandName: state.BrandName,
      ManufacturerCompanyName: state.ManufacturerCompanyName,
      Consumable: state.Consumable,
      TherapeuticFieldId: 1,
      TherapeuticFieldComment: 'TherapeuticFieldComment1',
      OfferReasonId: 1,
      OfferReasonComment: 'OfferReasonComment1',
      ProductAdvatage: 'ProductAdvatage1',
      ProductWeaknesses: 'ProductWeaknesses1',
      SimilarPharmaceuticalForm: true,
      SimilarTherapeuticField: true,
      SimilarConsumable: true,
      Comment: 'Comment1',
    };
    debugger;
    // if (Suggestion)
    //   deleteList = costs.map((i) => {
    //     return { Id: i.Id };
    //   });
    // state?.Suggestion?.forEach((item) => {
    //   const exist = Suggestion?.find((findItem) => findItem.Id === item.costId);
    //   if (exist) {
    //     if (
    //       exist.Hazineh !== item.Hazineh ||
    //       exist.SahmeSherkat !== item.SahmeSherkat ||
    //       exist.GhazaId !== Number(item.Food.split('*')[0]) ||
    //       (exist?.File === undefined && item.Image.file !== undefined) ||
    //       (item.Image.file !== undefined &&
    //         exist?.File !== undefined &&
    //         exist?.File?.Name !== item.Image?.file?.name)
    //     ) {
    //       updateList.push({
    //         Id: exist.Id!,
    //         Hazineh: Number(item.Hazineh),
    //         SahmeSherkat: Number(item.SahmeSherkat),
    //         GhazaId: Number(item.Food.split('*')[0]),
    //         File: item.Image,
    //         FileId: item.ImageId,
    //       });
    //     }
    //     deleteList.splice(
    //       deleteList.findIndex((item) => item.Id === exist.Id),
    //       1
    //     );
    //   } else {
    //     const data = {
    //       CompanyID: userInfo.CompanyID ?? '',
    //       WorkPlaceId: userInfo.WorkPlaceId ?? '',
    //       Hazineh: Number(item.Hazineh),
    //       SahmeSherkat: Number(item.SahmeSherkat),
    //       GharardadeMarbutehId:
    //         type === 'add' ? modal.contractData?.Id! : modal.id!,
    //       GhazaId: Number(item.Food.split('*')[0]),
    //       File: item.Image,
    //     };
    //     addList.push(data);
    //   }
    // });

    // if (id === 0) {
    //   return message.info('کاربری انتخاب نشده است');
    // }

    // if (
    //   // updateList.length === 0 &&
    //   addList.length === 0
    //   //  &&
    //   // deleteList.length === 0
    // ) {
    //   return message.info('تغییری در هزینه ها انجام نگرفته است');
    // }

    setLoading(true);
    // if (deleteList.length > 0)
    //   await deleteExistSuggestion(deleteList, {
    //     onSuccess: () => {
    //       queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
    //         exact: false,
    //       });
    //     },
    //     onError: (error) => {
    //       console.log('deleteExistSuggestion', error);
    //     },
    //   });
    // if (updateList.length > 0)
    //   await updateExistSuggestion(updateList, {
    //     onSuccess: () => {
    //       queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
    //         exact: false,
    //       });
    //     },
    //     onError: (error) => {
    //       console.log('updateExistSuggestion', error);
    //     },
    //   });
    // if (addList.length > 0)
    await addNewSuggestion(addList, {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getAllSuggestion], {
          exact: false,
        });
      },
      onError: (error) => {
        console.log('addNewSuggestion', error);
      },
    });
    message.success('هزینه با موفقیت ثبت شد');
    setLoading(false);
  };

  return {
    onSubmit,
    selectedContracts,
  };
};
