//selectors
export const getCategories = (state => state.categories);
export const getCategoryByTitle = ({ categories }, categoryName) => categories.find(category => category === categoryName)


const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;