import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, delete_job } from './action'

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState)
  const inputRef = useRef()
  const { job, jobs } = state
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div>
      <div className="App" style={{ padding: 10 }}>
        <h1>Todo</h1>
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter todo ...'
          onChange={e => {
            dispatch(setJob(e.target.value))
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(delete_job(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;