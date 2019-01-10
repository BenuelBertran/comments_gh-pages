import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
  state = {
    name: "",
    text: "",
    fullText: "",
    agree: false,
    className: "add hide",
    hide: true
  };

  onBtnClickHandler = (evt) => {
    evt.preventDefault();
    const {name, text, fullText} = this.state;
    this.props.onAddComments({
      id: +new Date(),
      author: name,
      text,
      fullText
    });
    this.setState ({
      className: "add hide",
      hide: true
    })
  };

  handleChange = evt => {
    const { id, value } = evt.currentTarget;
    this.setState({ [id]: value });
  };

  handleCheckboxChange = evt => {
    this.setState({ agree: evt.currentTarget.checked });
  };

  validate = () => {
    const { name, text, agree } = this.state;
    if (name.trim() && text.trim() && agree) {
      return true;
    }
    return false;
  };

  newCommentHandler = () => {
    const {hide} = this.state
    
    if (hide) {
      return (
        this.setState ({
          className: 'add',
          hide: false
        }) 
      )
    }
    return (
      this.setState ({
          className: 'add hide',
          hide: true
        })
      )
  }

  render() {
    const {name, text, fullText, className} = this.state;
    return (
      <React.Fragment>
        <button 
          className="btn__addComment"
          onClick={this.newCommentHandler}
          >Добавить комментарий</button>
        <form className={className}>
          <h3 className="newComment__title">Добавить комментарий</h3>
          <input
            id="name"
            type="text"
            onChange={this.handleChange}
            className="add__author"
            placeholder="Ваше имя"
            value={name}
          />
          <textarea
            id="text"
            onChange={this.handleChange}
            className="add__text"
            placeholder="Заголовок"
            value={text}
          />
          <textarea
            id="fullText"
            onChange={this.handleChange}
            className="add__text"
            placeholder="Комментарий"
            value={fullText}
          />
          <label className="add__checkrule">
            <input type="checkbox" onChange={this.handleCheckboxChange} /> Я
            согласен с правилами
          </label>
          <button
            className="add__btn"
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}
          >Отправить
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Add.propTypes = {
  onAddComments: PropTypes.func.isRequired
};

export {Add}