import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import users from "../models/usersModel.js";

export const login = async (req, res) => {
  try {
    const { email, pass } = req.body;

    // busca o usuário no banco pelo email
    const user = await users.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const isMatch = await bcrypt.compare(pass, user.pass);

    if (!isMatch) {
      return res.status(401).json({
        message: "Credenciais inválidas"
      });
    }

    // gerar token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ token });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};