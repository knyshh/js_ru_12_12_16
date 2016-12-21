import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpen from '../decorators/accordeon'

export default class ArticleList extends React.Component {
    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article} />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
}
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}