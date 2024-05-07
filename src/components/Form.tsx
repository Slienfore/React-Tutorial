import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// define schema
const schema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 character" }),
  age: z
    .number({ invalid_type_error: "age field is required!" })
    .min(18, { message: "age must be greater than or equal to 18!" }),
});

type Person = z.infer<typeof schema>; // auto infer TS type

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Person>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {/* {errors.name?.type === "required" && (<p className="text-danger">The name is required!</p>)} */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />

        {/* {errors.age?.type === "required" && (<p className="text-danger">The age is required!</p>)} */}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      {/* define button state of disabled */}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
