import {config} from 'dotenv'
config();

export const database = {
   connectionLimit:10,
   host:process.env.DATABASE_HOST||"b8xsgydpu3fo7upnjham-mysql.services.clever-cloud.com",
   user:process.env.DATABASE_USER||"uqahecg8ni9wx5x2",
   password:process.env.DATABASE_PASSWORD||"6AEpC24iIGy3t2BhuKCq",
   database:process.env.DATABASE_NAME||"b8xsgydpu3fo7upnjham"
}

export const port=process.env.PORT|| 3000;