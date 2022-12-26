// import { appFetch } from "../../api/CustomFetch";
// import { NEWS_APP_AUTH } from "../../utils/constants";
// import { actionAuth } from "../slices/AuthSlice";

// export const signUp = ({ userData, setError }) => {
//   return async (dispatch) => {
//     try {
//       const response = await appFetch({
//         method: "POST",
//         url: "https://megalab.pythonanywhere.com/registration/",
//         body: userData,
//       });
//       const users = {
//         id: response.id,
//         token: response.token,
//         name: response.name,
//         last_name: response.last_name,
//         nickname: response.nickname,
//       };
//       const json = JSON.stringify(users);
//       localStorage.setItem(NEWS_APP_AUTH, json);
//       dispatch(
//         actionAuth.baseAuth({
//           id: response.id,
//           token: response.token,
//           name: response.name,
//           last_name: response.last_name,
//           nickname: response.nickname,
//         })
//       );
//     } catch (error) {
//       setError("Этот аккаунт уже зарегистрирован");
//     }
//   };
// };

import { appFetch } from "../../api/CustomFetch";
import { NEWS_APP_AUTH } from "../../utils/constants";
import { actionAuth } from "../slices/AuthSlice";

export const signUp = ({ userData, setError }) => {
  return async (dispatch) => {
    try {
      const response = await appFetch({
        method: "POST",
        url: "https://megalab.pythonanywhere.com/registration/",
        body: userData,
      });
      const users = {
        id: response.id,
        token: response.token,
        name: response.name,
        last_name: response.last_name,
        nickname: response.nickname,
      };
      const json = JSON.stringify(users);
      localStorage.setItem(NEWS_APP_AUTH, json);
      dispatch(
        actionAuth.baseAuth({
          id: response.id,
          token: response.token,
          name: response.name,
          last_name: response.last_name,
          nickname: response.nickname,
        })
      );
    } catch (error) {
      setError("Этот аккаунт уже зарегистрирован");
    }
  };
}
