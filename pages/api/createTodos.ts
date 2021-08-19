// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string
}

import { table, minifyRecords } from './utils/Airtable' 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoObject | Data>
) {
  const { description }= req.body;

  try{
    const createdRecords = await table.create([{fields: {description}}])
    
    res.status(200).json(minifyRecords(createdRecords))
  }catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
