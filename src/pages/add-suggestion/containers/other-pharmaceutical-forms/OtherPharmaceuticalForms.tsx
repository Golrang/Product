import { FormSelect } from 'sharepoint-golrang-design-system'
import { useGetPharmaceuticalForms } from '../../hooks/useGetPharmaceuticalForms'

export const OtherPharmaceuticalForms = () =>  {
  const { allPharmaceuticalForms } = useGetPharmaceuticalForms()
 
  // const selectedPharmaceuticalForm = useWatch({
  //   name: 'PharmaceuticalFormId',
  // })

  // if(selectedPharmaceuticalForm){
  //   console.log(selectedPharmaceuticalForm, "jkhdsf")
  // } 
  // type TKeyOfForm = keyof TSuggestion
  return (
    <FormSelect
      name="OtherPharmaceuticalFormId"
      label= "سایر اشکال دارویی موجود(بازار ایران)"
      showSearch
      options={allPharmaceuticalForms}
      filterOption={(input: any, option: any) =>
        (option?.label ?? '').includes(input)
      }
    />
  )
}
