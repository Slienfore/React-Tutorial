import { useState, useEffect } from "react";
import userService, { type User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

// 自定义 hook 来获取用户信息
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        // strict mode must cleanup setup -> abort previous request
        if (err instanceof CanceledError) return;

        setError(err.message);
      })
      .finally(() => setLoading(false)); // cancel loading

    return () => cancel();
  }, []);

  return { users, error, loading, setUsers, setError };
};

export default useUsers;
