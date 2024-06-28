const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name === 'ErrorNotFound') {
    res.status(404).json({ status: 'Not Found', message: err.message });
  } else if (err.code === '23505' || err.name === 'ErrorConflict') {
    res.status(400).json({ message: err.message });
  } else if (err.name === 'InvalidCredentials') {
    res.status(400).json({ message: 'Wrong email or password' });
  } else if (err.name === 'Unauthenticated') {
    res.status(401).json({ message: 'Unauthenticated' });
  } else if (err.name === 'Unauthorized') {
    res.status(404).json({ message: err.message });
  } else if (err.name === 'MissingFile') {
    res.status(400).json({ message: 'Missing File' });
  } else {
    res.status(500).json({ status: 'Error', message: 'Internal Server Error!' });
  }
};

module.exports = errorHandler;
