import axios from 'axios';
const { REACT_APP_API_URL, REACT_APP_SECRET_KEY } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getArticles = async (keyword: string, page: string) => {
  try {
    const { data } = await api.get(
      `/${keyword}?page=${page}&pageSize=10&apiKey=${REACT_APP_SECRET_KEY}`
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
