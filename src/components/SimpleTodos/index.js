import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {totalList: initialTodosList}

  onDeleteTitle = id => {
    const {totalList} = this.state
    const deleteTotalList = totalList.filter(each => each.id !== id)

    this.setState({totalList: deleteTotalList})
  }

  render() {
    const {totalList} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading "> Simple Todos </h1>
          <ul className="item">
            {totalList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                eachUserDetails={eachItem}
                onDeleteTitle={this.onDeleteTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
