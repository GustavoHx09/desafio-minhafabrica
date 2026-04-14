import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // se nao enviar o token
  if (!authHeader) {
    return res.status(401).json({
      message: "Token não fornecido"
    });
  }

  // remove o bearer do token e pega a somente o token
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // salva dados do usuário na requisição
    req.user = decoded;

    return next(); // segue pra próxima etapa

  } catch (error) {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
};