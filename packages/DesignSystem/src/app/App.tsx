import { Form, TFormSchema, TFormError } from 'components/form'

import { FormSelect } from 'components/form-select/FormSelect'
import * as yup from 'yup'
import { FormInput } from 'components/form-input/FormInput'
import { useWatch } from 'react-hook-form'
import { ConfigProvider, theme } from 'antd'
import fa_IR from "antd/locale/fa_IR";
import { FormJalaliDatePicker } from 'components/form-jalalidatepicker'
import Button from 'components/button'


type TFormProps = {
  name: string
  age: number
  email: string
  company: string
  isHired: boolean
  isHe: string
  hiredDate: Date
}



type TKeyOfForm = keyof TFormProps

const schema = yup.object<TFormSchema<TFormProps>>({
  name: yup.string().required('نام لازم است'),
  age: yup
    .number()
    .required('سن لازم است')
    .positive('باید عدد مثبت باشد')
    .integer('باید عدد صحیح باشد'),
  email: yup.string().email().required('ایمیل لازم است'),
  company: yup.number().required('نام شرکت لازم است'),
  isHired: yup.boolean().required('وضعیت استخدام لازم است'),
  isHe: yup.string().required('جنسیت لازم است'),
  hiredDate: yup.date().required('تاریخ لازم است'),
})

const onFinish = (state: TFormProps) => {
  console.log(state)
}

const onFinishFailed = (error: TFormError<TFormProps>) => {
  console.log("Farshad", error)
}

const CustomSelect = () => {
  const state2 = useWatch({ name: 'age' })
  console.log({ state2 })

  return (
    <FormSelect<TKeyOfForm>
      name="company"
      label="company"
      options={[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
      ]}
    />
  )
}

const defaultValues = {
  name: 'string',
  age: 10,
  email: '',
  company: '2',
  isHired: true,
  isHe: 'No',
}

export const App = () => {
  console.log('app')


  return (
    <div className="max-w-md mx-auto p-32">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'IRANSansFaNum',
          },
        }}
        // theme={{algorithm: theme.darkAlgorithm,}} 
        locale={fa_IR} direction="rtl">
        <Form {...{ onFinish }}>
          <FormInput<TKeyOfForm> name="name" label="نام و نام خانوادگی" className='font-IranSans' />
          <FormJalaliDatePicker<TKeyOfForm> name="hiredDate" label='تاریخ' format={"YYYY-MM-DD"} />
          {/* <FormTextArea<TKeyOfForm> name="age" label="Age" />
        <FormInput<TKeyOfForm> name="email" label="Email" />
        <CustomSelect />
        <FormCheckBox<TKeyOfForm> name="isHired" label="Is Hired" />
        <FormRadio
          name="isHe"
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
        />
        <FormDatePicker<TKeyOfForm> name="hiredDate" label="Date" /> */}
          <Button type='primary' htmlType='submit' >Submit</Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </ConfigProvider>
    </div>
  )
}