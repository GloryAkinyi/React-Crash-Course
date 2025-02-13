import './App.css';



function ProductCard(){
  return(

    <article>
      <h2>iPhone 15 Pro</h2>
      <p>To use an iPhone, you'll need an Apple ID, internet access, and enough storage space. You can also sync your iPhone to a computer using iTunes or the Finder. </p>
      <img src='/images/iphone.jpeg' width="500px" heigh="300px"/>


      <h2>Specifications</h2>
      <p>Dimensions	146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)</p>
      <p>Weight	172 g (6.07 oz)</p>
      <p>Splash, Water, and Dust Resistant 3 Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529.</p>
      <p>Video Recording. 4K Dolby Vision video recording at 24 fps, 25 fps, 30 fps, or 60 fps.</p>



    </article>
  )


}



function App() {
  return (
    <div className="App">
     
     <ProductCard />


    </div>
  );
}

export default App;
