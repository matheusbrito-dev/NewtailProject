import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const key = 'MnCHJsommaRbRsrkQnhyjL5TWLCv1qyxXuynmStKmGkErzx6PlcelVqJwLtvDpWZJ3ZDNh3d808hOF26-gtbl9tacOrvN7X1VQ8hRULu102CwN8bnFESVmPm0xdIukzwcoONOZRxmm_cJ8wWKoKlTwyEqQ7hsZdwJhH_MaMMYHLoIQtuhtK8Gov6AT13SjI-H9gBAfIN1cj9CMa_yn_BDWIvHeOuCbyFtnqrm-i6q8rZo100i2LMyOkyZ4pHXtqziQhyqa0T-dysH0O0GrXe8lepRtM-NmuJ5wnXpxiJyUzlYpQJd37S9wvbTDN0FHSkT50MT0J2rsG6riruWRRD1A'
async function validade(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    await promisify(jwt.verify(token, key, { algorithms: ['RS256'] }));
    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

export default validade