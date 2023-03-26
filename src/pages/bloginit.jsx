import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function Bloginit(){
    const [news, setnews] = useState([])
    const bl=localStorage.getItem("blog")
    // const [blog ,setblog]=useState(bl)
    const [loading,setloading]=useState(true)
const [divindex,setdivindex]=useState(null)

      const search=useRef()
    useEffect(() => {
try{
  const apikey = '19cb82e3c971d3b419abb9050aeac8fa';
  const category = 'general';
 const  url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
   
   fetch(url)
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
   setnews(data.articles)
   localStorage.setItem("blog",JSON.stringify(news))

   console.log(news)
     }).finally(
      setloading(false)

     );
     
}
catch(err){
  console.log(err)
  setloading(true)
}   
    }, [])
    const loadspinner = () => {
      setTimeout(() => {
        return loading && `<span className='spinner-border spinner'></span>`
      }, 5);
    }


    const searchcategory=()=>{
const  apikey = '19cb82e3c971d3b419abb9050aeac8fa';
const url = `https://gnews.io/api/v4/search?q=${search.current.value}&lang=en&country=us&max=10&apikey=` + apikey;
fetch(url)
 .then(function (response) {
   return response.json();
 })
 .then(function (data) {
setnews(data.articles)
 }); 
    }

    function truncate(string, limit) {
        let dots = "..."
        if (string.length > limit) {
          string = string.substring(0, limit) + dots
        }
        return string
      }
    return(
<div>
<div className="nav2"> 
<Link to="/" style={{textDecoration:"none"}}>
<h1 className="blogname" style={{marginTop:"0px" ,fontSize:"2em"}}>HeyBlog</h1>
</Link>
   <div className="d-flex align-items-center search-icon ">
<div className="p-3">
<FontAwesomeIcon onClick={searchcategory}  color="black" icon={faSearch}/>

</div>
   <input ref={search} className="nav-search " placeholder="Search Blog">
    </input>
   </div>

</div>

<div className="blog-case" >
    { !loading && news.map((items,index)=>(
<div key={index}>
<div className="blog-cards p-1"  key={index.toString()} id={index.toString()}>
<div className="blog-img">
<img style={{width:"100%",height:"100%"}} src={items?.image}></img>
</div>

<div className="short-d">
  <title>{items.title}</title>
<p>{truncate(items?.description, 90)}</p>
<Link to="/viewmore">
<button onClick={()=>setdivindex(index)} className="viewmore">Viewmore...</button>
</Link></div>
</div>
</div>
        ))
    } 
</div>

{
              loading && <div>
                <span className='spinner-border spinner '></span>
                <span>LOADING...</span>
              </div>

            }
            {news.length <= 0 && !loading &&
              < div className="text-center mt-5 ">
                {loadspinner}
                <p>NO CONTENT</p>
              </div>
            }
</div>



    )
}
export default  Bloginit