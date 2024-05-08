import { useState, useEffect } from "react";
import { produce } from "immer";
import { CanceledError } from "./services/api-client";
import userService, { type User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  // useUsers: 自定义钩子来获取用户数据
  const { users, error, loading, setUsers, setError } = useUsers();// hook

  const deleteUser = (user: User) => {
    // avoid bad request, save origin users
    const original = [...users];
    // update the ui firstly
    setUsers(
      produce((draft) => {
        // delete user
        draft.splice(
          draft.findIndex((item) => item.id === user.id),
          1
        );
      })
    );

    // request the server secondly
    userService.delete(user.id).catch((err) => {
      // bad request
      setError(err.message);
      setUsers(original);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "alias" };
    setUsers([newUser, ...users]);

    // successful => return this new users carried a new id
    userService.create<User>(newUser)
      .then(({ data }) => setUsers([data, ...users]));
  };

  const updateUser = (user: User) => {
    // avoid bad request, save origin users
    const original = [...users];
    const updated = { ...user, name: user.name + "~" };
    setUsers(
      produce((draft) => {
        draft[draft.findIndex((item) => item.id === user.id)] = updated;
      })
    );

    userService.update<User>(updated).catch((err) => {
      setError(err.message);
      setUsers(original);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}

      <button onClick={addUser} className="btn btn-primary mb-3">
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                onClick={() => updateUser(user)}
                className="btn btn-outline-secondary mx-1"
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
