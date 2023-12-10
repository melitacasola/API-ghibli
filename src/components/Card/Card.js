import useFetch from "../useFetch"
import "./index.css"
export default function Card() {

  const { data } = useFetch("https://ghibliapi.vercel.app/films/")

  return (
    <section className="containerCard">
      <ul>
        {
          data?.map((film) => (
            <li key={film.id} >
              <a href="" className="Card" style={{ backgroundImage: `url(${film.image})` }} >
                <h3 className="Card__title">{film.title}  <span>{film.release_date}</span></h3>
              </a>
            </li>
          ))
        }

      </ul>
    </section>

  )
}