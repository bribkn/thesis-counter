import React, { JSX } from "react";

interface Friend {
    name: string;
    startDate: Date;
}

const friends: Friend[] = [
    { name: "Waldo", startDate: new Date("2022-07-01") },
    { name: "Barny", startDate: new Date("2021-07-01") },
];

const getDaysPassed = (startDate: Date): number => {
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const formatNumber = (num: number): string => {
    return Math.round(num).toLocaleString("es-ES");
};

interface Metrics {
    hours: number;
    lordOfTheRingsMovies: number;
    lolMatches: number;
    animeEpisodes: number;
}

const getMetrics = (days: number): Metrics => {
    return {
        hours: days * 24,
        lordOfTheRingsMovies: (days * 24) / 11.5, // Películas de 11.5 horas (trilogía extendida)
        lolMatches: (days * 24 * 60) / 40, // 40 minutos por partida
        animeEpisodes: (days * 24 * 60) / 20, // 20 minutos por capítulo
    };
};

export default function Home(): JSX.Element {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">
                ¿Cuántos días llevan en la tesis?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {friends.map((friend) => {
                    const days = getDaysPassed(friend.startDate);
                    const metrics = getMetrics(days);
                    return (
                        <div
                            key={friend.name}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center flex flex-col justify-between"
                        >
                            <h2 className="text-2xl font-semibold">{friend.name}</h2>
                            <p className="text-5xl font-bold my-4">{formatNumber(days)} días</p>
                            <p className="text-lg">({formatNumber(metrics.hours)} horas)</p>
                            <div className="mt-4 text-sm text-gray-400">
                                <p>Equivalen a: </p>
                                <p>
                                    🎥{" "}
                                    {formatNumber(Number(metrics.lordOfTheRingsMovies.toFixed(1)))}{" "}
                                    maratones de El Señor de los Anillos
                                </p>
                                <p>🎮 {formatNumber(metrics.lolMatches)} partidas de LoL</p>
                                <p>📺 {formatNumber(metrics.animeEpisodes)} capítulos de anime</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 flex space-x-4">
                <a
                    href="https://www.youtube.com/watch?v=jxnsgrSL2TQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                >
                    ¿Qué debo hacer?
                </a>
                <a
                    href="https://www.youtube.com/watch?v=o6wtDPVkKqI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                    Ejemplo de tesis
                </a>
            </div>
        </div>
    );
}
