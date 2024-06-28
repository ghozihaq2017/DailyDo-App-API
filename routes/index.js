const express = require('express');
const router = express.Router();
const userRouter = require('./userRoute.js');
const projectRouter = require('./projectRoute.js');
const taskRouter = require('./taskRoute.js');
const authRouter = require('./authRoute.js');
const { authentication } = require('../middlewares/auth.js');


router.use('/api', authRouter);

router.use(authentication);

router.use('/api/users', userRouter);

router.use('/api/projects', projectRouter);

router.use('/api/tasks', taskRouter);

module.exports = router;
