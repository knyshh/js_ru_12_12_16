import React from 'react'

///export default function toggleOpenArticle(Component) {
export default (Component) => class toggleOpenArticle extends React.Component {
    //return class WrapperComponent extends React.Component {
        constructor(){
            super()
            this.state = {
                openArticleId: false,
            }
        }
        render() {
            return <Component {...this.props} {...this.state}
                              isOpenItem = {this.isOpen}
                              toggleOpenArticle ={this.toggleOpenArticle}
            />
        }

        isOpen = id => this.state.openArticleId == id

        toggleOpenArticle = id => ev => {
            this.setState({
                openArticleId: this.state.openArticleId == id ? null : id


            })
        }

    }
