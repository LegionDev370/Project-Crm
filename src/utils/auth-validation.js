import joi from "joi";
export const authValidator = (data) => {
  const schema = joi.object({
    username: joi.string().min(3).max(32).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .min(3).max(16)
      .required(),
    isAdmin: joi.boolean().required(),
  });
  return schema.validate(data);
};
