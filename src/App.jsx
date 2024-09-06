import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { count, todosAtom, todosCount, todosSelectors } from './componentes/store/Atoms/States';

const App = () => {

  const selectorValue = useRecoilValue(todosSelectors);
  const [todos, setTodos] = useRecoilState(todosAtom);
  const length = useRecoilValue(count)

  useEffect(() => {
    setTodos(selectorValue);
  }, [])

  return (
    <div>
      <p style={{backgroundColor:"blue",color:"white"}} >{length}</p>
      {
        todos.map((res,val) => {
          return (
            <>
            <p key={val}>{res.title}</p>
            <hr/>
            </>
          )
        })
      }
    </div>
  )
}

export default App
