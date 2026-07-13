import axios, { AxiosError } from "axios";
import {
  handleError,
  handleLoading,
  setCategories,
  setProducts,
} from "../../stores/slices/datasSlice";

const api = axios.create({
  baseURL: "https://my-books-n5re.onrender.com/api",
});

const getErrorMessage = (error: unknown) => {
  const err = error as AxiosError<{ message?: string }>;
  return err.response?.data?.message || err.message || "Something went wrong!";
};

export const getProductsAdmin = async (dispatch: any) => {
  dispatch(handleLoading(true));

  try {
    const { data } = await api.get(
      "/products"
      //  {
      //   headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      // }
    );

    console.log(data);
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};

export const getCategoriesAdmin = async (dispatch: any) => {
  dispatch(handleLoading(true));

  try {
    const { data } = await api.get(
      "/categories"
      //  {
      //   headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      // }
    );

    console.log("categories", data);
    dispatch(setCategories(data));
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};

export const addProductAdmin = async (dispatch: any, item: any) => {
  dispatch(handleLoading(true));

  try {
    const response = await api.post("/products", item); // ✅ send item directly, not wrapped

    console.log(response);
  } catch (error) {
    dispatch(handleError(getErrorMessage(error)));
  } finally {
    dispatch(handleLoading(false));
  }
};
