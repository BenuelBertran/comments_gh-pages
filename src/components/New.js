import React from 'react';
import PropTypes from 'prop-types'

class New extends React.Component {
  state = {
    visible: false
  };

  handleShowMoreClick = evt => {
    evt.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    const { author, text, fullText } = this.props.data;
    const { visible } = this.state;
    return (
      <article className="comments__new">
        <p className="comments__author">{author}:</p>
        <p className="comments__text">{text}</p>
        {!visible && (
          <a
            onClick={this.handleShowMoreClick}
            href="#showmore"
            className="comments__showmore"
          >
            Показать полный комментарий
          </a>
        )}
        {visible && <p className="comments__fulltext">{fullText}</p>}
      </article>
    );
  }
}

New.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    fullText: PropTypes.string.isRequired
  })
};

export {New}