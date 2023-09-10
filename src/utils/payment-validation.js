import Joi from "joi";

export const paymentValidator = (data) => {
  const schema = Joi.object({
    student_name: Joi.string(),
    direction: Joi.string(),
    phone_number: Joi.string(),
    teacher_name: Joi.string(),
    payment_date: Joi.string(),
  });
  return schema.validate(data);
};
