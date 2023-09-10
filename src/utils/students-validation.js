import joi from "joi";
export const studentValidator = (data) => {
  const schema = joi.object({
    firstname: joi.string().min(3).max(30).required(),
    phone_number: joi
      .string()
      .regex(/^9989[012345789][0-9]{7}$/)
      .max(30)
      .required(),
    parentsName: joi.string().min(3).max(30).required(),
    parentsPhone: joi
      .string()
      .regex(/^9989[012345789][0-9]{7}$/)
      .max(30)
      .required(),
    photo: joi.string().required(),
  });
  return schema.validate(data);
};
