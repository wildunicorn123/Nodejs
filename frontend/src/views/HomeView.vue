<template>
  <section>
  <div class="row align-items-md-stretch space">
    <h1 class="words">Welcome To</h1>
    <img class="loog" src="https://i.postimg.cc/GhwcTdQP/Green-Flow-1.png" alt="loog" loading="lazy">
  </div>
  </section>
  <section class="white">
    <div class="what">
      <h2 class="text-white who">Who Are We?</h2>
      <p class="text-white">At GreenFlow, we understand the importance of fostering a connection with nature, especially when the world feels uncertain. Our handpicked selection of lush greens and vibrant succulents serves as a reminder that life continues to flourish, no matter the circumstances. Each plant is carefully nurtured, reflecting our commitment to spreading positivity and vitality during these trying times.
  We believe in the power of greenery to uplift spirits and improve well-being. Whether you're a seasoned plant parent or a beginner looking to embark on a new journey, our knowledgeable team is here to guide you. We offer personalized recommendations, care tips, and virtual workshops to help you cultivate your own indoor oasis.
  GreenFlow isn't just a store; it's a symbol of growth, adaptability, and hope. Join us in embracing the beauty of nature as we navigate these unprecedented times together.
  </p>
    </div>
  </section>
  <div class="second">
    <div class="container " style="position:relative;">
                  <section class="row gap-5">
                          <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                              <a><font-awesome-icon :icon="['fas', 'mobile']" size="8x" style="color: #00bf63;" /></a>
                              <h5 class="text-white">Easy to Access</h5>
                              <p class="text-white text-center px-3">
                                  Order online by using your cellphone
                                  </p>
                                  <a class="custom-btn" href="./sources/pages/shop.html">View All</a>
                          </div>
                          <div id="product2" class="col d-flex flex-column align-items-center gap-3 p-4">
                              <a><font-awesome-icon :icon="['fas', 'clock']" size="8x" style="color: #00bf63;" /></a>
                              <h5 class="text-white">By When</h5>
                              <p class="text-white text-center px-3">
                                  Let us know by when you need it.
                                  </p>
                                  <a class="custom-btn" href="./sources/pages/shop.html">View All</a>
                          </div>
                          <div id="product3" class="col d-flex flex-column align-items-center gap-3 p-4">
                              <a><font-awesome-icon :icon="['fas', 'home']" size="8x" style="color:#00bf63;" /></a>
                              <h5 class="text-white">Convenient</h5>
  
                              <p class="text-white text-center px-3">
                                  Collect in-store or have it Delivered to your Home.
                                  </p>
                                  <a class="custom-btn" href="./sources/pages/shop.html">View All</a>
  
                          </div>
                  </section>
              </div>
  </div>
  <div class="last">
    <h2 class="title">What we sell:</h2>
  <div class="container " style="position:relative;">
            <section class="row gap-5">
              <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                  <div class="card" style="width: 18rem">
        <img src="https://i.postimg.cc/yY5w5PJV/parsley.jpg
  " class="card-img-top" alt="herbs" style="height:18rem"/>
        <div class="card-body">
          <a href=""><h3 class="card-title ">Potted Herbs</h3></a> 
        </div>
        </div>
              </div>
                <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                  <div class="card" style="width: 18rem">
        <img src="https://i.postimg.cc/RZsH1WqJ/tulips.jpg
  " class="card-img-top" alt="herbs" />
        <div class="card-body">
         <a href=""><h3 class="card-title ">Flower Pots</h3></a> 
        </div>
        </div>
              </div>
                <div id="product1" class="col d-flex flex-column align-items-center gap-3 p-4">
                  <div class="card" style="width: 18rem">
        <img src="https://i.postimg.cc/MpH1c7tj/shovel-pack.jpg" class="card-img-top" alt="herbs" />
        <div class="card-body">
          <a href=""><h3 class="card-title">Gardening Equipment</h3></a> 
        </div>
        </div>
              </div>
                </section>
    </div>
  </div>
<<<<<<< HEAD
</div>
</template>
<style >
@import url('https://fonts.cdnfonts.com/css/rye');
.words{
  font-size: 60px;
  width:50%;
  float:right;
  margin-top: 300px;
text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #000000 0%,
    #737373 20%,
    #00bf63 76%,
    #ffffff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  font-family: 'Doulos SIL Compact', sans-serif;
}
@keyframes textclip {
  to {
    background-position: 200% center;
=======
  </template>
  <style scoped>
  @import url('https://fonts.cdnfonts.com/css/rye');
  .words{
    font-size: 60px;
    width:50%;
    float:right;
    margin-top: 300px;
  text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #000000 0%,
      #737373 20%,
      #00bf63 76%,
      #ffffff 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    font-family: 'Doulos SIL Compact', sans-serif;
>>>>>>> 126c192ae95ecb39a752fbad0e6ff8f6065639ad
  }
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .card:hover {
    outline: var(--b) solid var(--c);
    outline-offset: var(--g);
  }
  a{
    text-decoration:none;
    font-family: 'Doulos SIL Compact', sans-serif!important;
     color:#737373;
  }
  .card-text{
    font-size:15px!important;
    text-decoration: none;
  }
  
  .card {
    --s: 290px;
    --b: 8px;
    --g: 18px;
    --c: #414833;
  
    width: var(--s);
    aspect-ratio: 1;
    outline: calc(var(--s) / 2) solid #0009;
    outline-offset: calc(var(--s) / -2);
    cursor: pointer;
    transition: 0.3s;
    margin-top:50px;
  }
  .card-body{
      width:300px;
      height:100px;
  }
  .loog{
    width: 100vh;
    float:left;
  }
  
  .who, .title{
    font-family: 'Rye', sans-serif;
    font-size:30px;
     padding-top:50px;
     padding-bottom:30px;
     color:#ffffff;
  }
  .what>p{
    padding-left:50px;
    padding-right:50px;
    padding-bottom:50px;
  }
  .second{
    font-family: 'Doulos SIL Compact', sans-serif;
  }
  .custom-btn {
      text-decoration:none;
      text-transform:uppercase;
      font-weight:600;
      font-size:20px;
      width:150px;
      background-color:#00bf63;
      height:50px;
      padding:10px 10px 10px 10px;
      color:black;
      transition:  linear 0.5s;
      text-align:center;
      border-radius:15px;
  }
  .custom-btn:hover {
      background-color:rgb(255, 255, 255);
      background-color:white;
      color:#00bf63;
      opacity:1;
  }
  .who:hover{
    text-decoration: 5px underline;
    text-decoration-color:#00bf63;
  }
  .white{
    animation:slideInLeft 2s ease-in;
  }
  @keyframes slideInLeft{
    from{
      transform: translateX(-300px);
    }
    to{
      transform: translateX(0);
    }
  }
  @media (max-width: 1260px) {
  .align-items-md-stretch {
    flex-direction: column;
  }
  .words {
    width: 100%; 
    margin-top: 20px; 
    text-align: center; 
  }
  .loog {
    width: 60%; 
    margin-top: 20px; 
    margin-left: auto; 
    margin-right: auto;
  }

  
}
  @media (max-width: 768px) {
  .align-items-md-stretch {
    flex-direction: column; 
  }
  .words {
    width: 100%; 
    margin-top: 20px; 
    text-align: center; 
  }
  .loog {
    width: 60%; 
    margin-top: 20px; 
    margin-left: auto; 
    margin-right: auto;
  }
}
</style>
