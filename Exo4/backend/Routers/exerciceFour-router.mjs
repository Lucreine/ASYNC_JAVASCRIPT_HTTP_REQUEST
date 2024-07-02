import {Router} from 'express';
import fetch from "node-fetch";


const exoFourRouter = Router();


exoFourRouter.get('/users', async (req, res) => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20')
      // res.json(response.data);
      .then(response => response.json())
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  
});
export default exoFourRouter;