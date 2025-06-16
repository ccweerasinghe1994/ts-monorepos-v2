import type { SeedPacketCollectionModel } from '@seeds/models'
import * as fs from 'fs'
import path from 'path'
import * as yaml from 'yaml'

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'seeds.yml')

const data = fs.readFileSync(DATA_FILE_PATH, 'utf8')

export function loadData(): SeedPacketCollectionModel {
	return yaml.parse(data) as SeedPacketCollectionModel
}

export default loadData
