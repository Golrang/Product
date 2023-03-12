import { FormSelect } from 'sharepoint-golrang-design-system';
import { TKeyOfForm } from 'types/priority/priority.types';
import { useGetPriority } from '../../hooks/useGetPriority';
export const Priority = () => {
  const { allPriority } = useGetPriority();
  return (
    <>
      <FormSelect<TKeyOfForm>
        name="Title"
        label="اولویت"
        mode="multiple"
        showSearch
        options={allPriority}
        filterOption={(input, option) =>
          (option?.label ?? '').toString().includes(input)
        }
      />
    </>
  );
};
