// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string
}

import { table, getMinifiedRecord } from './utils/Airtable' 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoObject | Data>
) {
  const { id, fields }= req.body;

  try{
    const updatedRecords = await table.update([
        {id, fields},
    ])

    res.status(200).json(getMinifiedRecord(updatedRecords[0]))
  }catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong' })
  }
}
