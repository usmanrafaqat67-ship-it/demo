const router = require("express").Router();
const jwt = require("jsonwebtoken");

// ⚠️ Demo Admin (real system me DB hota hai)
const ADMIN = {
  email: "admin@shop.com",
  password: "123456"
};

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {

    const token = jwt.sign(
      { role: "admin" },
      "secretkey",
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;