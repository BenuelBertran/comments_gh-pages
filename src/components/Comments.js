import React from 'react'
import PropTypes from 'prop-types'
import {New} from './New'

class Comments extends React.Component {
  renderComments = () => {
    const {data} = this.props
    let commentsTemplate = null

    if (data.length) {
      commentsTemplate = data.map(function(item) {
        return <New key={item.id} data={item} />
      })
    } else {
      commentsTemplate = <p>Ещё никто не оставил комментариев</p>
    }

    return commentsTemplate
  }
                                  
  render() {
    return (
      this.renderComments()
    )
  }
}

Comments.propTypes = {
  data: PropTypes.array.isRequired,
}

export {Comments}