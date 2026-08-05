import './App.css'
import Coffee from './features/components/Coffee'
import Header from './features/components/Header'
import Main from './features/components/Main'

function App() {

  return (
    <Main>
      <Header/>
      {/* <SideIndicator total={coffees.length}>*/}
          <Coffee/>
      {/* </SideIndicator>*/}
    </Main>
  )
}

export default App
