import { useFormik } from "formik";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";


import Link from "next/link";
import { adminSchema } from "../../schema/admin";

const  Index = () => {
  const onSubmit = async (values, actions, errors) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
        username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your user name",
      value: formik.values.username,
      error: formik.errors.username,
      touched: formik.touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Your password",
      value: formik.values.password,
      error: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <section className="container mx-auto my-4 ">
      <form className="md:w-1/2 w-full mx-auto" onSubmit={formik.handleSubmit}>
        <Title addClass={"text-4xl mb-3"}>Admin Login</Title>
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
            Login
          </button>
        
          <Link href={'/'}> 
          <span className="text-sm underline cursor-pointer text-secondary">Home Page</span>
           </Link>
        </div>
      </form>
    </section>
  );
};

export default Index;
