//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsRedux = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsRedux;