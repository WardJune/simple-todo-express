import { Response, Request, NextFunction } from "express";
import { check, validationResult } from "express-validator";

//! validation
const validate = [
  check("username").isString(),
  check("password").isLength({ min: 6 }),
  //* custom validate
  //   check("password_confirmation").custom((value, { req }) => {
  //     if (value !== req.body.password) {
  //       throw new Error("Password confirmation doesnt match");
  //     }

  //     return true;
  //   }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    return next();
  },
];

export default validate;
