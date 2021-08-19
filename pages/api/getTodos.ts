// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string
}

import { table, minifyRecords } from './utils/Airtable' 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    const records = await table.select({}).firstPage()
    const minifiedRecords = minifyRecords(records)
    res.status(200).json(minifiedRecords)
  }catch (err) {
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
