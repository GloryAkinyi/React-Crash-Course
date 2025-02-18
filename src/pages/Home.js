import Header from "../components/Header";
export default  function Home(){
    return(

    
        <div>


<a href="/about" style={{backgroundColor: "blue", height : "50px",width : "100px" }}>About</a>
<a href="/contact">Contact</a>

            <Header/>


            <h3 className="heading1">Welcome to our Homepage</h3>

        </div>

    )
}