import { loader } from 'graphql.macro'
import './App.scss'

const query = loader('./foo.graphql')

function Graphql() {
    return (
        <div className="App">
            <header className="App-header">
                <p>{query}</p>
            </header>
        </div>
    )
}

export default Graphql
