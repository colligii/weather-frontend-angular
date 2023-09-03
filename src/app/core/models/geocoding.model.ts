export class Geocoding {
    results: GeocodingResult[]
}


export class GeocodingResult {
    id: number
    name: string
    latitude: number
    feature_code: string
    country_code: string
    population: number
    country_id: number
    country: string
    admin1: string
    admin2: string
    elevation: number
    
}