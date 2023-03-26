import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './component/nav'
// import 'bootstrap/dist/js/bootstrap.bundle.min'


function App() {
  return (
    
      <div className='blog-landingpage'>
        <Nav />
        <div className='landingpage '>
          <div className='blog-intro ' >
            <h1 className='blogname'>HEY BLOG</h1>
            <p>WELCOME!!!</p>
            <p>Here you will have undilluted experience in every section of this blog.Our goal is to make sure every member has great experience,
              you are permited to only be a first timer once then you become our precious member.</p>
          </div>
          <div className=' picture'>
            <img className='myimg' src='thebg.jpg'></img>
          </div>
        </div>
      </div>
  
  )
}
export default App
