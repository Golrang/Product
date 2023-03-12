import {
    FormProvider,
    Control,
    FieldValues,
    UseFormSetValue,
} from "react-hook-form";

export type FormProviderProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = {
    children: React.ReactNode | React.ReactNode[]
} & {
    control: Control<TFieldValues, TContext>
    setValue: UseFormSetValue<TFieldValues>
}

export const Provider = FormProvider as <
    TFieldValues extends FieldValues,
    TContext = any
>(
    props: FormProviderProps<TFieldValues, TContext>
) => JSX.Element