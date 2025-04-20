// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ message: "No token, access denied" });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     // req.manager = decoded.id;
//     req.manager = '67faa272b800e01a502ebd69';
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Token is not valid" });
//   }
// }

// module.exports = auth;





const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token, auth denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.manager = decoded.id; // 👈 attaches manager's _id to req.manager
    next();
  } catch (err) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
