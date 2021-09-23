import express, { Request } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";

import { User } from "../entities/User";
import { ILoginUser, IResponseLoginUser, IResponseSignInUser, ISignInUser } from "../interfaces/user";

const router = express.Router();

router.post("/login", async (req: Request<{}, IResponseLoginUser, ILoginUser>, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await getRepository(User).findOne({ email });
    if (!user) {
      next({ msg: "email or password is invalid", status: 401 });
      return;
    }

    const isValidUser = bcrypt.compareSync(password, user.password);
    if (!isValidUser) {
      next({ msg: "email or password is invalid", status: 401 });
      return;
    }

    res.status(201).send({ name: user.name, email: user.email });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/signin", async (req: Request<{}, IResponseSignInUser, ISignInUser>, res, next) => {
  const { name, email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync(+(process.env.BCRYPT_SALT as string));
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    await getRepository(User).save(user);
    res.status(201).send({ name, email });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
