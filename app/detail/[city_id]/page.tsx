import { getCityData, getWeatherData } from "@/app/api/weather";
import CityData from "@/interfaces/city";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

async function WeatherComponent({ city }: { city: CityData }) {
  // Wait for the playlists
  const weather = await getWeatherData(city);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <>
      <div>
        <h2 className="text-2xl mb-4 text-white">
          {city.name}({city.country})
        </h2>
        <span className="font-medium text-lg text-white">
          {weather.main.temp_max.toFixed(0)}&deg;C
        </span>
        &nbsp;
        <span className="text-gray-300 text-sm">
          {weather.main.temp_min.toFixed(0)}&deg;C
        </span>
      </div>
      <div className="justify-self-end">
        <Image src={iconUrl} width={50} height={50} alt="Weather Icon" />
        <div className="text-white text-sm">
          {weather.weather[0].description}
        </div>
      </div>
    </>
  );
}

export default async function Detail({
  params: { city_id },
}: {
  params: { city_id: string };
}) {
  const city = await getCityData(city_id);

  return (
    <main className="mt-5 mx-5">
      <h1 className="text-xl font-medium mb-4">KunJon Weather App</h1>
      <Link href="/" className="text-sm">
        &larr; Home
      </Link>
      <div className="py-5">
        <div className="bg-blue-500 rounded p-4">
          <div className="grid grid-cols-2">
            <Suspense fallback={<div>Loading...</div>}>
              <WeatherComponent city={city} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
