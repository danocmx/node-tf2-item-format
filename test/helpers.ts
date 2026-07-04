import fs from 'fs';
import path from 'path';

export function readFixture<T>(fileName: string): T {
	return JSON.parse(
		fs.readFileSync(path.join(__dirname, 'test/data', fileName), 'utf8')
	);
}
