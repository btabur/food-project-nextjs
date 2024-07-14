import * as Yup from 'yup';

export const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  newPassword: Yup.string()
    .required('Required').min(3,"too short")
});

