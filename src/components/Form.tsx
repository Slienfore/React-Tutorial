import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState<{ name: string; age: number | string }>({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // prevent form default submit action
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* controlled component ->受控组件*/}
        {/* onChange -> 将状态管理交给 React */}
        {/* value -> 实现数据流向页面 */}
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}

          value={person.name}
          
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* controlled component ->受控组件*/}
        {/* onChange -> 将状态管理交给 React */}
        {/* value -> 实现数据流向页面 */}
        <input
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
