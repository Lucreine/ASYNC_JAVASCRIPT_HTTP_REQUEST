import {Router} from 'express';
import axios from 'axios';

const exoFourRouter = Router();


exoFourRouter.get('/users', async (req, res) => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=20');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

export default exoFourRouter;