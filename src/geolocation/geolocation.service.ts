import { Reader } from '@maxmind/geoip2-node'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GeolocationService {
	async getGeoLocation(ip: string): Promise<any> {
		try {
			const options = {
				// you can use options like `cache` or `watchForUpdates`
				watchForUpdates: true,
			}
			const reader = await Reader.open(
				'./src/geodb/Geolite2-City.mmdb',
				options,
			)
			const geo = await reader.city(ip)
			return geo
		} catch (err) {
			console.error(err)
			return { error: 'Error processing the IP address, service unavailable' }
		}
	}
}
