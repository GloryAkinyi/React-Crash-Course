
export function ProductCard(){

    const product = {

        imgSrc : "/images/iphone3.jpeg",
        title : "iPhone 15 Pro",
        specifications : [
            "Dimensions	146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)",
            "Weight	172 g (6.07 oz)",
            "Splash, Water, and Dust Resistant 3 Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529.",
            "Video Recording. 4K Dolby Vision video recording at 24 fps, 25 fps, 30 fps, or 60 fps."

        ],
        price : "8900"
        

    }




    return(
  
      <article style={{border: "2px solid black", borderRadius:"8px",padding:"15px", textAlign:"center"}}>
        <h2>{product.title}</h2>
        <p>To use an iPhone, you'll need an Apple ID, internet access, and enough storage space. You can also sync your iPhone to a computer using iTunes or the Finder. </p>
        <img src={product.imgSrc}/>
  
  
        <h2>Specifications</h2>
  
        <ul style={{listStyle : "none"}}>
          <li>{product.specifications[0]}</li>
          <li>{product.specifications[1]}</li>
          <li>{product.specifications[2]}</li>
          <li>{product.specifications[3]}</li>
        </ul>
  
  
        <button>Buy from ${product.price}</button>
  
  
  
  
       <div id="main">
  
       <div className="sub-division1">


        <img src="/images/iphone.jpeg"  className="myimg"/>
        
        <h2>iPhone 14</h2>
        <p>Includes crash detection that calls emergency services if it senses a car accident </p>
        <button className="mybtn">See More</button>
       </div>
  
  
       <div className="sub-division1">
        
       <img src="/images/iphone2.png" className="myimg"/>
        <h2>iPhone 14</h2>
        <p>Includes crash detection that calls emergency services if it senses a car accident </p>
        <button className="mybtn">See More</button>
       </div>
  
  
       <div className="sub-division1">
       <img src="/images/iphone3.jpeg"  className="myimg"/>
        <h2>iPhone 14</h2>
        <p>Includes crash detection that calls emergency services if it senses a car accident </p>
        <button className="mybtn">See More</button>
       </div>
  
  
       </div>
  
      </article>
  
  
  
  
    )
  
  
  }
  