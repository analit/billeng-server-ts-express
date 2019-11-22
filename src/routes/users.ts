import {Router} from "express"

/* GET users listing. */
const router = Router()
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

export default router;
