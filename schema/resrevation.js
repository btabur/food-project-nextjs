import * as Yup from 'yup';

export const reservationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  persons: Yup.number()
    .min(1, 'At least 1 person')
    .required('Required'),
  date: Yup.date().required('Required').nullable(),
});

