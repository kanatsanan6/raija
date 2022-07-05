import * as api from "../apis/users"


export const getUsers = async (dispatch) => {
  const data = await api.getUsers();
  dispatch({
    type: "FETCH_USER",
    users: data
  })
}