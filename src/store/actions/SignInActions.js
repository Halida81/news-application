import { appFetch } from "../../api/CustomFetch";
import { NEWS_APP_AUTH } from "../../utils/constants";
import { actionAuth } from "../slices/AuthSlice";
const REMEMBER = "REMEMBER";

export const signIn = ({ userData, setError }) => {
  console.log(userData);
  return async (dispatch) => {
    try {
      const response = await appFetch({
        method: "POST",
        url: "https://megalab.pythonanywhere.com/login/",
        body: userData,
      });
      setError(response.message);
      const users = {
        token: response.token,
      };
      const json = JSON.stringify(users);
      localStorage.setItem(NEWS_APP_AUTH, json);
      if (users) {
        localStorage.setItem(
          REMEMBER,
          JSON.stringify({
            token: response.token,
          })
        );
      }
      dispatch(
        actionAuth.baseAuth({
          token: response.token,
        })
      );
    } catch (error) {
      setError("Не правильный пароль или логин");
    }
  };
};
