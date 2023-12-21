import useFetch from "../useFetch"
import "./index.css"
// import { Link } from "react-router-dom"
export default function Card() {

  const { data } = useFetch("https://ghibliapi.vercel.app/films/")
  console.log(data)

  return (
    <section className="containerCard">
      <ul>
        {
          data?.map((film) => (
            <li key={film.id} >
              <div className="Card" style={{ backgroundImage: `url(${film.image})` }} >
                <h3 className="Card__title">{film.title}  <span>{film.release_date}</span></h3>
              </div>
            </li>
          ))
        }

      </ul>
    </section>

  )
}