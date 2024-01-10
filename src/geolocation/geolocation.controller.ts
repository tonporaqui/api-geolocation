import { Controller, Get, Query } from '@nestjs/common'
import { GeolocationService } from './geolocation.service'

@Controller('geolocation')
export class GeolocationController {
	constructor(private geolocationService: GeolocationService) {}

	@Get()
	async getGeoLocation(@Query('ip') ip: string) {
		try {
			const geo = await this.geolocationService.getGeoLocation(ip)
			if (!geo) {
				return { error: 'IP not found' }
			}
			return geo
		} catch (error) {
			console.error(error)
			return { error: 'Error processing the IP address' }
		}
	}
}
