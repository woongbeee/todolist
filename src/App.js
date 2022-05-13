import Todo from './Todo.js'
import Add from './Add.js'

export default function App($app) {
    this.state = {
        list:[]
    }

    const add = new Add({
        $app,
        onClick: (writeValue) => {
            this.setState({
                list: [...this.state.list, writeValue]
            })
        }   
    })

    const todo = new Todo({
        $app,

        initialState: {
            list:this.state.list
        },

        removeClick: (removingTarget) => {
            this.state.list.splice(removingTarget, 1);
            this.setState({
                list: [...this.state.list]
            })
        }
    })

  

    this.setState = (next) => {
        this.state = next;
        todo.setState({
            list:this.state.list
        });
    }
}
