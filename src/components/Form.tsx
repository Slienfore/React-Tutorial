import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null); // useRef hook
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // prevent form default submit action

    person.name = nameRef.current!.value;
    person.age = parseInt(nameRef.current!.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* ref the dom */}
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* ref the dom */}
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
