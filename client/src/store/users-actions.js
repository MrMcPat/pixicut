import { usersActions } from "./users-slice";
import axios from "axios";

let endpoints = ["/users", "/drawings", "/comments", "follows"];

export function fetchUsersData() {
  return async function (dispatch) {
    async function fetchAccountData() {
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );
      return response;
    }
    try {
      const usersData = await fetchAccountData();
      dispatch(
        usersActions.getUsers({
          users: usersData[0].data,
          drawings: usersData[1].data,
          comments: usersData[2].data,
          follows: usersData[3].data,
        })
      );
    } catch (error) {
      // console.log(error)
    }
  };
}
