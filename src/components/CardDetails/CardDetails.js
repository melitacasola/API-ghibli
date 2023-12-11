import './index.css'
import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import { NavBar } from '../NavBar/NavBar'
const CardDetails = () => {
    const { id } = useParams()
    const urlDetail = `https://ghibliapi.vercel.app/films/${id}`
    const { data } = useFetch(urlDetail)
    console.log({ data })

    return (
        <section className='background-image'>
            <NavBar />
            <hr className='separator' />
            <section className="detailsContainer">

                <img src={`${data.image}`} alt="" />
                <div className="detailsContent">
                    <h1>{data.title}</h1>
                    <h4>{data.original_title}</h4>
                    <p className='detailsContent__subtitle'>Año:{data.release_date}</p>
                    <p>{data.description}</p>

                </div>
            </section>
        </section>

    )
}

export { CardDetails }