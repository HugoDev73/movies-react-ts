import React, { useEffect, useState } from 'react'
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import { landingPageDTO } from './peliculas/peliculas.model';

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {

            setPeliculas({
                enCartelera: [
                    {
                        id: 1,
                        titulo: "Batman, el caballero de la noche",
                        poster: "https://aquivaelnombre.files.wordpress.com/2012/07/batman-poster.jpg"
                    },
                    {
                        id: 2,
                        titulo: "El hombre araña",
                        poster: "https://aquivaelnombre.files.wordpress.com/2012/07/batman-poster.jpg"
                    },
                    {
                        id: 3,
                        titulo: "Anabelle",
                        poster: "https://aquivaelnombre.files.wordpress.com/2012/07/batman-poster.jpg"
                    }
                ],
                proximosEstrenos: [
                    {
                        id: 1,
                        titulo: "Batman, el caballero de la noche",
                        poster: "https://aquivaelnombre.files.wordpress.com/2012/07/batman-poster.jpg"
                    },
                    {
                        id: 2,
                        titulo: "El hombre araña",
                        poster: "https://aquivaelnombre.files.wordpress.com/2012/07/batman-poster.jpg"
                    }
                ]
            })

        }, 1000);

        return () => clearTimeout(timerId);
    })


    return (
        <div>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>De estreno</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </div>
    )
}
