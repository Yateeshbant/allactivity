import { config } from "dotenv";
config()

const _DB_HOST: string = process.env._DB_HOST
const _DB_USER: string = process.env._DB_USER
const _DB_PASSWORD: string = process.env._DB_PASSWORD
const _DB_DATABASE: string = process.env._DB_DATABASE
const _PORT: string = process.env.PORT || "5000"
const _DOMAIN: string = process.env._DOMAIN
export default { _DB_HOST, _DB_USER, _DB_PASSWORD, _DB_DATABASE, _PORT, _DOMAIN }