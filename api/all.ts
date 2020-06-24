import { NowRequest, NowResponse } from '@vercel/node'
import { all } from './db.json'

export default (req: NowRequest, res: NowResponse) => {
  res.json(all)
}