import { useQuery } from "react-query";

import networkClient from "../../../network";
import {
  createCategoryEntity,
  CategoryResponse,
} from "../../types/categories/Category";
import { categoryQueries } from "./query";

const getCategories = async () => {
  const { data } = await networkClient<CategoryResponse>("/api_category.php");

  return createCategoryEntity(data);
};

const useGetCategories = () => {
  return useQuery({
    queryKey: categoryQueries.all,
    queryFn: getCategories,
  });
};

export { useGetCategories };
