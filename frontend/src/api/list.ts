import axios, { AxiosResponse } from "axios";

const getLists = async (
  userId: string,
  onSuccess?: (responce: AxiosResponse) => void,
  onFailure?: (err: unknown) => void
) => {
  try {
    const responce = await axios.get(`http://localhost:5000/${userId}/lists`);

    onSuccess?.(responce);
  } catch (err) {
    onFailure?.(err);
  }
};

const createList = async (
  title: string,
  userId: string,
  onSuccess?: (responce: AxiosResponse) => void,
  onFailure?: (err: unknown) => void
) => {
  try {
    const response = await axios.post(`http://localhost:5000/${userId}/lists`, {
      title,
    });
    onSuccess?.(response);
  } catch (err) {
    onFailure?.(err);
  }
};

const deleteList = async (
  listId: string,
  onSuccess?: (responce: AxiosResponse) => void,
  onFailure?: (err: unknown) => void
) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/lists/${listId}`
    );
    onSuccess?.(response);
  } catch (err) {
    onFailure?.(err);
  }
};

export { createList, getLists, deleteList };
