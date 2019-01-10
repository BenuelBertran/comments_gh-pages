import React from 'react';
import {Add} from './components/Add'
import {Comments} from './components/Comments'
import './App.css';

class App extends React.Component {
  state = {
    comments: null,
    isLoading: false
  };
  
   static getDerivedStateFromProps(props, state) {
    let nextFilteredComments;

    if (Array.isArray(state.comments)) {
      nextFilteredComments = [...state.comments]

      nextFilteredComments.forEach((item, index) => {
        if (item.fullText.toLowerCase().indexOf('михалков') !== -1) {
          item.fullText = 'СПАМ'
        }
      })

      return {
        filteredComments: nextFilteredComments,
      }
    }

    return null
  }

  componentDidMount() {
    this.setState ({isLoading: true})
    fetch ('https://benuelbertran.github.io/comments/data/commentsData.json')
      .then (response => {
        return response.json()
      })
      .then (data => {
        setTimeout(() => {
          this.setState ({isLoading: false, comments: data})
        }, 1500)
      })
  }

  handleAddComments = data => {
    const nextComments = [data, ...this.state.comments];
    this.setState({comments: nextComments});
  };

  render() {
    const {comments, isLoading} = this.state
    
    return (
      <React.Fragment>
        <div className="comments__wrapper">
          <h2 className="comments__title">Комментарии</h2>
          <p className="comments__subtitle">Сначала новые:</p>
          {isLoading && <p>Загружаю...</p>}
          {Array.isArray(comments) && <Comments data={comments}/>}
          <Add onAddComments={this.handleAddComments}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
