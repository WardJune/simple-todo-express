import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Hash {
  //* hashing
  public static hash = (password: string): Promise<string> => {
    return bycrypt.hash(password, 10);
  };

  //* hash check
  public static hashCheck = async (
    value: string,
    hashedValue: string
  ): Promise<boolean> => {
    let result = await bycrypt.compare(value, hashedValue);

    return result;
  };

  //* generate token

  public static generateToken = (id: number, username: string) => {
    const secret: string = process.env.JWT_SECRET_KEY || "anothersecret";

    const token: string = jwt.sign({ id, username }, secret);

    return token;
  };
}

export default Hash;
