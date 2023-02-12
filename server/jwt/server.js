import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const secret = 'super_duper_secret';

app.post('/create-jwt', (req, res) => {
  const sub = req.body.sub;
  const name = req.body.name;

  const token = jwt.sign({ sub, name }, secret, { expiresIn: '1h' });
  res.send({ token });
});

function validateJWT(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

app.use(validateJWT);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});