import { resolve } from 'path'

export const Constants = {
    SCHEMA_DIR: 'schemas',
}

export const schema = (filename) => resolve(process.cwd(), Constants.SCHEMA_DIR, filename)

