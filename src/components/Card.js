import useFetch from "./useFetch"

export default function Card() {

    const {data} = useFetch("https://ghibliapi.vercel.app/films/")

    return (
        <ul>
        {
          data?.map((film) => (
            <li key={film.id} className="aver">
              {film.title}
              <img src={film.image} className='achicar' alt='peliculas'/>
              {film.description}
              <h3>AÑO: {film.release_date}</h3>
            </li>
          ))
        }

      </ul>
    )
}