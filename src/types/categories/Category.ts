type Category = {
  id: number;
  name: string;
};

type Categories = Category[];

type CategoryResponse = {
  trivia_categories: Categories;
};

const createCategoryEntity = (res: CategoryResponse) => {
  return res.trivia_categories.map((category: Category) => category);
};

export { createCategoryEntity, type CategoryResponse };
