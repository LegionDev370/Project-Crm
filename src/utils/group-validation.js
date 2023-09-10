import Joi from "joi";
export const groupValidator = (data) => {
  const schema = Joi.object({
    groupOrientation: Joi.string(),
    schoolDays: Joi.string().required(),
    lessonTime: Joi.string()
      .pattern(/^(2[0-3]|[01][0-9]):[0-5][0-9]-(2[0-3]|[01][0-9]):[0-5][0-9]$/)
      .required(),
    teacher: Joi.string()
      .max(64)
      .required(),
    teacherPhoneNumber: Joi.string()
      .pattern(/^\+[0-9]{12}$/)
      .required(),
    teacherPhoto: Joi.string(),
    isActive: Joi.boolean().required(),
  });
  return schema.validate(data);
};
