import React from "react";
import Title from "./Title";
import Input from "../form/Input";
import { Formik, useFormik } from "formik";
import { resolve } from "styled-jsx/css";
import { reservationSchema } from "../../schema/resrevation";

const Reservation = () => {

  const onSubmit = async(values,actions,errors)=> {
    await new Promise((resolve)=>setTimeout(resolve,4000))
    actions.resetForm()
  }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
    validationSchema:reservationSchema,
   
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
      name: "persons",
      type: "number",
      placeholder: "How many persons?",
      value: formik.values.persons,
      error: formik.errors.persons,
      touched: formik.touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: formik.values.date,
      error: formik.errors.date,
      touched: formik.touched.date,
    },
  ];
  return (
    <section className="py-10 mt-10 container mx-auto flex gap-10 flex-wrap">
      <form className="w-[40%]" onSubmit={formik.handleSubmit}>
        <Title addClass={"text-4xl mb-3"}>Book a Table</Title>
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
        <button type="submit" className="btn-primary mt-5">
          Book Now
        </button>
      </form>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.752055209741!2d28.954775445998653!3d41.01567218215864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab98d3ac01031%3A0x8accf5042157cfed!2sS%C3%BCleymaniye%20Camii!5e0!3m2!1str!2str!4v1719072084176!5m2!1str!2str"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Reservation;
