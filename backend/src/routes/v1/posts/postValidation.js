export const usersPostValidator = {
  nametext: {
    isLength: {
      errorMessage: "Name should be at least 3 chars long",
      options: {
        min: 3,
        max: 1000
      },
      trim: true,
    },
  },
  image: {
      trim: true
  }
};