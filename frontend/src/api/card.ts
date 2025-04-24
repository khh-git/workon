import axios, { AxiosResponse } from "axios";

export const createCard = async (
  listId: string,
  title: string,
  onSuccess?: (responce: AxiosResponse) => void,
  onFailure?: (err: unknown) => void
) => {
  try {
    const response = await axios.post(`http://localhost:5000/${listId}/cards`, {
      title,
    });
    onSuccess?.(response);
  } catch (err) {
    onFailure?.(err);
  }
};
