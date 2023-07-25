import { Request, Response } from 'express';
import axios from 'axios';
import apiMiddleware from '../../middleware';

export default class SignController {

  async signIn(request: Request, response: Response) {
    try {
      if (request.body) {
        const urlApi = `api/oauth2/v1/token?grant_type=password&username=${request.body.username}&password=${request.body.password}`;
        const body = {
          urlApi: urlApi,
        }
        const middleware = await apiMiddleware(body);
        if (middleware) {
          const apiResponse = await axios.post(middleware.tokenEndpoint, middleware.config);

          const token = apiResponse.data.access_token;

          return response.json({
            token: token,
          })
        }
      }
      return response.status(400).json({
        error: 'signIn error'
      })

    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        const detailedMessage = error.response.data.detailedMessage;
        return response.status(400).json({
          error: errorMessage,
          detailedMessage: detailedMessage,
        });
      } else if (error.message) {
        return response.status(400).json({
          error: error.message,
        });
      } else {
        return response.status(400).json({
          error: 'Unexpected error while signing in',
        });
      }
    }
  };
} 