import axios, { type AxiosError } from "axios";
import { handleError, handleLoading } from "../stores/slices/allFuncSlices";
import { setTokenAndUser } from "../stores/slices/authSlice";

const api = axios.create({
  baseURL: "https://my-books-n5re.onrender.com/api",
});

const getErrorMessage = (error: unknown) => {
  const err = error as AxiosError<{ message?: string }>;
  return err.response?.data?.message || err.message || "Something went wrong";
};

export const getHomeQuestions = async (dispatch: any) => {
  dispatch(handleLoading(true));

  try {
    const token = localStorage.getItem("token");

    const { data } = await api.get("/book/get-all", {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return data;
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};

// register user
export const registerApi = async (
  dispatch: any,
  formData: any,
  navigate: any
) => {
  dispatch(handleLoading(true));

  try {
    const { data } = await api.post("/auth/register", {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    dispatch(setTokenAndUser({ token: data.token, user: data.user }));
    navigate("/");
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};

// login user
export const loginApi = async (dispatch: any) => {
  dispatch(handleLoading(true));

  try {
    const response = await api.get("/books/");
    return response.data;
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};

// Open Library !!!!

// start

// export const getHomeBooks = async (dispatch) => {
//   dispatch(handleLoading(true));

//   try {
//     const { data } = await axios.get("/search.json?q=harry+potter");

//     console.log("Open Library Home Data:", data);

//     // dispatch(setBooks(data));

//     return data;
//   } catch (error) {
//     dispatch(
//       handleError(
//         error.response?.data?.message || error.message || "Something went wrong"
//       )
//     );
//   } finally {
//     dispatch(handleLoading(false));
//   }
// };
