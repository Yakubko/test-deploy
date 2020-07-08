import express from 'express';
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
router.get('/test', (req, res) => {
    res.status(200).json({ a: 1, b: 2, c: 3, d: 4 });
});

export default router;
