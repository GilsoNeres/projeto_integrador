const AuthService = require('../services/authService');

class AuthController {
  async register(req, res) {
    try {
      const token = await AuthService.register(req.body);
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
