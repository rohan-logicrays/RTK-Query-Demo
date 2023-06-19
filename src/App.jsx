import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorList from './Components/Error/ErrorList'
import Pagination from './Components/Page/Pagination'
import Scroll from './Components/Scroll/Scroll'
import PostsList from './Components/posts/PostsList'
import redux from "./assets/redux.svg"
function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5 flex-wrap align-items-center justify-content-center">
        <div className="p-2 text-center">
          <strong><img src={redux} alt='' height="30px" width="30px" />React Redux Retreive Data with RTK Query Example</strong>
        </div>
      
      </div>
      <div className="d-flex flex-row flex-wrap">
      <div className='m-2 logo '>
        <ErrorList />
        </div> 
        <div className='m-2 logo'>
        <PostsList /></div>
         
        <Pagination />
        <Scroll />
      </div>
    </div>
  )
}
export default App