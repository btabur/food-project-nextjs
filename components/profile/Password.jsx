import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from "formik";
import { passwordSchema } from '../../schema/password';



const Password = () => {
    const onSubmit = async(values,actions,errors)=> {
        await new Promise((resolve)=>setTimeout(resolve,4000))
        actions.resetForm()
      }
      const formik = useFormik({
        initialValues: {
         password:"",
         newPassword:""
        },
        onSubmit,
        validationSchema:passwordSchema,
       
      });
    const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Your password ",
          value: formik.values.password,
          error: formik.errors.password,
          touched: formik.touched.password,
        },
        {
          id: 2,
          name: "newPassword",
          type: "password",
          placeholder: "Your new password",
          value: formik.values.newPassword,
          error: formik.errors.newPassword,
          touched: formik.touched.newPassword,
        },
        
      ];
  return (
    <form onSubmit={formik.handleSubmit} className="w-full md:w-2/3  min-h-80 ">
    <Title addClass={"text-[40px]"}>Password</Title>
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
    <button  className="btn-primary w-72 mt-4" type='submit'> Update</button>
  </form>
  )
}

export default Password