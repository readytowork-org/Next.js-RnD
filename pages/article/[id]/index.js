import {useRouter} from 'next/router'
import {useHistory} from "next/router"
import Meta from "../../../components/Meta"
import {server} from "../../../config/index"

export default function article({article}) {
    const router = useRouter()
    const handleClick = ()=>(
        router.push("/")
    )
    return (
        <div>
            <Meta title={article.title}/>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <br/>
          <a href="/" onClick={handleClick} style={{color:"red",justifySelf:"center"}}>Go Back</a>
        </div>
    )
}

// export const getServerSideProps = async (context)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props:{
//             article
//         }
//     }

// }

export const getStaticProps = async (context)=>{
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props:{
            article,
        }
    }

}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()

    const ids = articles.map((a)=>a.id)
    const paths = ids.map(id=>({params:{id:id.toString()}}))

    // return {
    //     paths:{
    //         params:{...ids}
    //     }
    // }

    return {
        paths,
        fallback:false
    }
}