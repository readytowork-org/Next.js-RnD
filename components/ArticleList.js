import articleStyles from "../styles/Article.module.css"
import ArticleItem from "../components/ArticleItem";

export default function ArticleList({articles}) {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article,index)=>(
                <ArticleItem article={article} />
            ))}
        </div>
    )
}
