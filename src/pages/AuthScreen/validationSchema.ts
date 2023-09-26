import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email é obrigatório')
    .matches(
      /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Email deve ser válido',
    ),
  password: Yup.string().required('Senha é obrigatória'),
});
