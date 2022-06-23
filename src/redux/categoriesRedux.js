//selectors
export const getCategories = (state => state.categories);
export const getCategoryByTitle = ({categories}, categoryName) => categories.find(category => category === categoryName)

//action
// const createActionName = actionName => `app/categories/${actionName}`;


const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
          return statePart;
      };
};

export default categoriesReducer;