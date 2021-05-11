export const registerUserMockMessage = (bool) => {
  const dict = {
    false: () => {
      return {
        message: "Access is denied.",
        code: 403,
      };
    },
    true: () => {
      return {
        message: "La identificacion de esta empresa no esta registrada.",
        code: "",
      };
    },
  };

  return dict[bool]();
};

export const checkNITMockMessage = () => {};
