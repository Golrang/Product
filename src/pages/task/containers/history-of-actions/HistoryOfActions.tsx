import React from 'react';
import { Table } from 'components';
import { TColumn } from 'components/table';
import { TTableLog } from 'types/task/historyOfActions.types';
import { useGetHistoryOfActions } from '../../hooks/useGetHistoryOfActions'
import { TableError } from "general-components/table-error"
import { TableLoading } from "general-components/table-loading"

const columns: TColumn<TTableLog>[] = [
  {
    title: 'اقدام کننده',
    dataIndex: 'Actioner',
    key: 'Actioner',
  },
  {
    title: 'تاریخ اقدام',
    dataIndex: 'ActionDate',
    key: 'ActionDate',
  },
  {
    title: 'مرحله',
    dataIndex: 'Step',
    key: 'Step',
  },

  {
    title: 'نتیجه',
    dataIndex: 'Result',
    key: 'Result',
  },

  {
    title: 'توضیحات',
    dataIndex: 'Description',
    key: 'Description',
  },
];

export const HistoryOfActions = () => {
    const {  data, error, isLoading  } = useGetHistoryOfActions();
    if (isLoading) {
        return <TableLoading />
    }
    if (error || !data) return <TableError />
    return <Table columns={columns} dataSource={data} bordered />
};
