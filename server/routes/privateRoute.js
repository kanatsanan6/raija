import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send({ message: "access denied" });

  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: "invalid token" });
  }
};
