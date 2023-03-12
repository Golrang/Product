import dayjs from 'dayjs';
import { TColumn } from 'sharepoint-golrang-design-system';
import { TSuggestionTable } from 'types/suggestion/suggestionTable.types';

export const columns = () => {
  const columnsForMe: TColumn<TSuggestionTable>[] = [
    {
      title: 'ردیف',
      dataIndex: 'row',
      key: 'row',
      align: 'center',
      width: 20,
    },
    {
      title: 'کدپیشنهاد',
      dataIndex: 'Id',
      key: 'Id',
    },
    {
      title: 'تاریخ ثبت پیشنهاد',
      dataIndex: 'Created',
      key: 'Created',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD'),
    },
    {
      title: 'مرحله جاری ',
      dataIndex: 'Consumable',
      key: 'Consumable',
    },

    // {
    //   title: 'عملیات',
    //   align: 'center',
    //   width: 110,
    //   render: (_, record: TActivateUser) => (
    //     <EditSuggestionEdit id={record.Id ?? 0} />
    //   ),
    // },
  ];

  const columnsForCheck: TColumn<TSuggestionTable>[] = [
    {
      title: 'ردیف',
      dataIndex: 'row',
      key: 'row',
      align: 'center',
      width: 20,
    },
    {
      title: 'کدپیشنهاد',
      dataIndex: 'Id',
      key: 'Id',
    },
    {
      title: 'پیشنهاد دهنده ',
      dataIndex: 'Owner',
      key: 'Owner',
    },
    {
      title: 'تاریخ ثبت پیشنهاد',
      dataIndex: 'Created',
      key: 'Created',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD'),
    },
    {
      title: 'مرحله جاری ',
      dataIndex: 'Consumable',
      key: 'Consumable',
    },
    {
      title: 'تاریخ آخرین تغییر',
      dataIndex: 'Modified',
      key: 'Modified',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD'),
    },

    // {
    //   title: 'عملیات',
    //   align: 'center',
    //   width: 110,
    //   render: (_, record: TActivateUser) => (
    //     <EditSuggestionEdit id={record.Id ?? 0} />
    //   ),
    // },
  ];

  const columnsForAll: TColumn<TSuggestionTable>[] = [
    {
      title: 'ردیف',
      dataIndex: 'row',
      key: 'row',
      align: 'center',
      width: 20,
    },
    {
      title: 'کدپیشنهاد',
      dataIndex: 'Id',
      key: 'Id',
    },
    {
      title: 'پیشنهاد دهنده ',
      dataIndex: 'Owner',
      key: 'Owner',
    },
    {
      title: 'تاریخ ثبت پیشنهاد',
      dataIndex: 'Created',
      key: 'Created',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD'),
    },
    {
      title: 'مرحله جاری ',
      dataIndex: 'Consumable',
      key: 'Consumable',
    },
    {
      title: 'تاریخ آخرین تغییر',
      dataIndex: 'Modified',
      key: 'Modified',
      render: (text: string) => dayjs(text).format('YYYY/MM/DD'),
    },

    // {
    //   title: 'عملیات',
    //   align: 'center',
    //   width: 110,
    //   render: (_, record: TActivateUser) => (
    //     <EditSuggestionEdit id={record.Id ?? 0} />
    //   ),
    // },
  ];
  return { columnsForMe, columnsForCheck, columnsForAll };
};
