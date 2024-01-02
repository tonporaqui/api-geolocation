import { Controller, Get, Query } from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Controller('geolocation')
export class GeolocationController {
  @Get()
  getGeoLocation(@Query('ip') ip: string) {
    const geo = geoip.lookup(ip);
    if (!geo) {
      return { error: 'ip not found' };
    }
    return geo;
  }
}
