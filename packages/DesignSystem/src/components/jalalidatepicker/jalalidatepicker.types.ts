import { DatePickerProps } from 'antd';

export type TJalaliDatePicker = Omit<DatePickerProps, 'ref'> & {
    rangePicker?: boolean
}