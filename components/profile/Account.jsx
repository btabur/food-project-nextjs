import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from "formik";
import { profileSchema } from '../../schema/profile';



const Account = () => {
    const onSubmit = async(values,actions,errors)=> {
        await new Promise((resolve)=>setTimeout(resolve,4000))
        actions.resetForm()
      }
      const formik = useFormik({
        initialValues: {
          fullName: "",
          phoneNumber: "",
          email: "",
          address: "",
          job: "",
          bio: "",
        },
        onSubmit,
        validationSchema:profileSchema,
       
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
          name: "phoneNumber",
          type: "tel",
          placeholder: "Your Phone",
          value: formik.values.phoneNumber,
          error: formik.errors.phoneNumber,
          touched: formik.touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email",
          value: formik.values.email,
          error: formik.errors.email,
          touched: formik.touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Your address",
          value: formik.values.address,
          error: formik.errors.address,
          touched: formik.touched.address,
        },
        {
          id: 5,
          name: "job",
          type: "text",
          placeholder: "Your job",
          value: formik.values.job,
          error: formik.errors.job,
          touched: formik.touched.job,
        },
        {
            id:6,
            name: "bio",
            type: "text",
            placeholder: "Your bio",
            value: formik.values.bio,
            error: formik.errors.bio,
            touched: formik.touched.bio,
          },
      ];
  return (
    <form onSubmit={formik.handleSubmit} className="w-full md:w-2/3 min-h-80  ">
    <Title addClass={"text-[40px]"}>Account Settings</Title>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {
            inputs.map((input)=> (
                <Input key={input.id} {...input}   
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={input.error}
                touched={input.touched}/>

            ))
        }
    </div>
    <button type='submit' className="btn-primary w-72 mt-4"> Update</button>
  </form>
  )
}

export default Account