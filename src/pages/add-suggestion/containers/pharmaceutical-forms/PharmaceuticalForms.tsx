import { FormSelect } from 'sharepoint-golrang-design-system'
import { useGetPharmaceuticalForms } from '../../hooks/useGetPharmaceuticalForms'

export const PharmaceuticalForms = () => {
  const { allPharmaceuticalForms, onChangeHandler } = useGetPharmaceuticalForms()
  // const selectedPharmaceuticalForm = useWatch({
  //   name: 'PharmaceuticalFormId',
  // })

  // if(selectedPharmaceuticalForm){
  //   console.log(selectedPharmaceuticalForm)
  // }
  // type TKeyOfForm = keyof TSuggestion
  return (
    <FormSelect
      name="PharmaceuticalFormId"
      label="شکل دارویی"
      showSearch
      options={allPharmaceuticalForms}
      onChange={onChangeHandler}
      filterOption={(input: any, option: any) =>
        (option?.label ?? '').includes(input)
      }
    />
  )
}




  

  

