import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'

export default class ArticleList extends React.Component {
    state = {
        openArticleId: null,
        isClosed: true
    }
    render() {
        const {articles, isClosed} = this.props
        console.log('1'+this.state.isClosed);
        //if (!isClosed) return null
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.state.openArticleId == article.id}
                         onClick={this.toggleOpenArticle(article.id)}
                         closedArticle = {this.toggleOpenArticle(article.id)}
                />
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

    toggleOpenArticle = id => ev => {
        console.log(this.state.isClosed);
        this.setState({
            openArticleId: id,
            isClosed: !this.state.isClosed
        })
    }



}

ArticleList.defaultProps = {
    articles: []
}
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}