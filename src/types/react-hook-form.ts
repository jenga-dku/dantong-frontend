import { FormState, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type FormRegister = {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  setValue?: UseFormSetValue<any>;
};
