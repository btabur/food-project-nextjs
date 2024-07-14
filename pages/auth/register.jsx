import { useFormik } from "formik";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { registerSchema } from "../../schema/register";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values, actions, errors) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
        fullName:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  const inputs = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        placeholder: "Your Full Name",
        value: formik.values.fullName,
        error: formik.errors.fullName,
        touched: formik.touched.fullName,
      },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Your Email",
        value: formik.values.email,
        error: formik.errors.email,
        touched: formik.touched.email,
      },
    {
      id: 3 ,
      name: "password",
      type: "password",
      placeholder: "Enter Your password",
      value: formik.values.password,
      error: formik.errors.password,
      touched: formik.touched.password,
    },
    {
        id: 4 ,
        name: "confirmPassword",
        type: "password",
        placeholder: "Enter Your confirm password",
        value: formik.values.confirmPassword,
        error: formik.errors.confirmPassword,
        touched: formik.touched.confirmPassword,
      },
  ];

  return (
    <section className="container mx-auto my-10 ">
      <form className="md:w-1/2 w-full mx-auto" onSubmit={formik.handleSubmit}>
        <Title addClass={"text-4xl mb-3"}>Register</Title>
        <div className="flex flex-col gap-3">
          {inputs.map((input) => (
            <Input
              key={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={input.error}
              touched={input.touched}
            />
          ))}
        </div>
        <div >
          <button type="submit" className="btn-primary mt-5 w-full text-xl">
            Register
          </button>
          <button type="submit" className="btn-primary !bg-secondary text-xl mt-5 w-full flex items-center justify-center gap-2">
            <FaGithub className="text-xl" />
            Github
          </button>
          <Link href={'/auth/login'}> 
          <span className="text-sm underline cursor-pointer text-secondary">Do you have a count</span>
           </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
