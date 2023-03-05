import { TableError } from 'general-components/table-error';
import { Table, TColumn } from 'sharepoint-golrang-design-system';
import { TSuggestionTable } from 'types/suggestion/suggestionTable.types';

export const SuggestionTable = ({
  datatable,
  errors,
  columns,
}: {
  datatable?: TSuggestionTable[];
  errors: unknown;
  columns: TColumn<TSuggestionTable>[];
}) => {
  if (errors || !datatable) return <TableError />;
  return <Table columns={columns} dataSource={datatable} bordered />;
};
