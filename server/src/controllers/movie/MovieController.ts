import { Request, Response } from 'express';
import axios from 'axios';
import apiUrl from '../../middleware';

export default class GroupController {
  async listAll(request: Request, response: Response) {
    try {
      //const token = request?.headers?.authorization?.split(' ')[1];
      const payload = request.body;
      const middleware = await apiUrl();
      if (middleware) {
        const { data } = await axios.get(middleware + `s=${payload}`);
        return response.status(200).json(data.Search);
      }
      return response.status(400).json({ message: 'Middleware error' });
    } catch (err) {
      return response.status(400).json({
        error: 'Unexpected error while listing movies',
      });
    }
  };
}