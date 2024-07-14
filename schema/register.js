import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),
    confirmPassword:Yup.string().required("confirm password is required")
    .oneOf([Yup.ref("password"),null],"password is not match")
});
