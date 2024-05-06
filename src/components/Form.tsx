import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// define constrains
interface Person {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name is required!</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 2!</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 16 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age is required!</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">The age must be at least 16 years old!</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
