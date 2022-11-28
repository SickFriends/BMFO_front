import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/user";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const [user, setUser] = useRecoilState(userState);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/auth/logout")
      .then((res) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            isLogin: false,
          })
        );
        setUser({
          isLogin: false,
        });
        navigate("/");
      })
      .catch(() => {
        console.log("dpfjqkftod");
      });
  }, []);

  return <div onClick={() => {}}>로그아웃중..</div>;
};

export default Logout;
