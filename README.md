# Weather App

### React + TypeScript + Vite

Simple aplicación para mostrar información del clima por medio de una api.

# Instalación

Crear archivo .env en la raiz del proyecto y crear las siguientes variables dentro:

`VITE_WEATHER_URL="https://api.weatherapi.com/v1/current.json"
VITE_WEATHER_COUNTRY="Guatemala"
VITE_WEATHER_API_KEY=XXXXXXXXXXXXXXX`

Modificar el archivo vite-env.d.ts crear el siguiente código:

`interface ImportMetaEnv {

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;readonly VITE_WEATHER_URL: string

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;readonly VITE_WEATHER_COUNTRY: string

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;readonly VITE_WEATHER_API_KEY: number

}`

# Vista Escritorio

# Vista Móvil
