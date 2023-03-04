import { axiosInstans } from "../config/axiosInstance";

export const getMeaLReq = () => {
  return axiosInstans.get("/foods");
};

export const getBasketReq = () => {
  return axiosInstans.get("/basket");
};

export const postAddToBasketReq = (newItem) => {
  return axiosInstans.post(`foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  });
};

export const putUpdateBasketReq = (id, amount) => {
  return axiosInstans.put(`basketItem/${id}/update`, amount);
};
export const deleteBasketReq = (id) => {
  return axiosInstans.delete(`basketItem/${id}/delete`);
};
export const orderSubmitReq = (orderData) => {
  return axiosInstans.post(
    `https://jsonplaceholder.typicode.com/posts`,
    orderData
  );
};
