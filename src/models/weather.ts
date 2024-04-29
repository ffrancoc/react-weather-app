export default interface Weather {
    locationName: string
    locationCountry: string
    currentTempC: number
    currentTempF: number
    currentIsDay: number
    currentCondition: string
    currentConditionIcon: string
    currentWindMPH: number
    currentWindKPH: number
    currentHumidity: number
    currentIsCloudy: number
    currentWindDir: string
}