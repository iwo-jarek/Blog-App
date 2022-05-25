//selectors
// export const getAllPosts = (state => state.posts);
// actions
// const createActionName = actionName => `app/posts/${actionName}`;
  

// action creators
const postsReducer = (statePart = [], action) => {
  console.log(statePart);
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;