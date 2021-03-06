import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTALBE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

const table = base(process.env.AIRTABLE_TABLE_NAME!)

const getMinifiedRecord = (record: any) => {
  if(!record.fields.completed) {
    record.fields.completed = false;
  }
  return {
    id: record.id,
    fields: record.fields
  }
}

const minifyRecords = (records: any) => {
   return records.map((record: any) => getMinifiedRecord(record))
}

export { table, getMinifiedRecord, minifyRecords }