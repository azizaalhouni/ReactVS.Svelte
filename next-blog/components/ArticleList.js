
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
import Pagination from './Pagination'
const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article)=> (
                <ArticleItem article={article}/>

            ))}
                {/* <Pagination postsPerPage={} totalPosts={article}></Pagination> */}

        </div>
    )
}
export default ArticleList