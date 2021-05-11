export const postValidator = {
  text: {
    isLength: {
      errorMessage: "Text should be at least 2 chars long",
      options: {
        min: 2,
        max: 1500
      },
      trim: true,
    },
  }
};