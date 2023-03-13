// import { listName } from 'constant';
// import { getListItemByFilter } from '../general/pnp/pnpjs';
// import { TOfferReason}  from 'types/offer-reason/offerReason.types'

// export const getAllOfferReason = async (): Promise<
//   TOfferReason[]
// > => {
//   const data = await getListItemByFilter<TOfferReason[]>(
//     listName.offerReason,
//     {
//       filter: '',
//       select: '*',
//       expand: '',
//     }
//   );
//   console.log(data);
//   debugger;
//   return data;
// };

export const getAllOfferReason = () => {
  const data = [
    { Id: 1, Title: "مکمل سبد" },
    { Id: 2, Title: "اندازه بازار بالا" },
    { Id: 3, Title: "اولین تولید کننده" },
    { Id: 4, Title: "کنگره یا پیشنهاد پزشک KOL" },
    { Id: 5, Title: "کمبود در بازار" },
    { Id: 6, Title: "سایر" },
  ];
  return data;
};
