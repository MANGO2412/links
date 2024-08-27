import {config} from 'dotenv'
config();

export const database = {
   connectionLimit:10,
   host:process.env.DATABASE_HOST||"b6nxnbp46dpfkogm8ltb-mysql.services.clever-cloud.com",
   user:process.env.DATABASE_USER||"u8igleicnt9uprqz",
   password:process.env.DATABASE_PASSWORD||"9KduH4T8OWAznLSpjDlN",
   database:process.env.DATABASE_NAME||"b6nxnbp46dpfkogm8ltb"
}

export const port=process.env.PORT|| 3000;