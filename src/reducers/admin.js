const admin = (state = {}, action) => {
  return {
    ...state,
    ...action,
  }
};

export default admin;