<template>
<div>
    <div class="wack">
    <h1 class="text-white flo">Give a Greenning:</h1>
    <div class="mdeck">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2934218158252!2d18.490087375327164!3d-33.984996273182404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1692950457938!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
          </div>
          <div class="top">
    <div class="frow">
         <div class="formblock">
            <form id="form" action="https://formspree.io/f/mdoroajo" accept-charset="UTF-8" method="post">
        <label for="name">Name and Surname:</label>
        <input id="name" name="name" type="text"  placeholder="Name And Surname">
        <br>
        <label for="Custom order/comment">Subject/Question:</label>
        <input id="text" name="comment" type="text" placeholder="order here/comment">
        <br>
        <label for="date">Appointment Date</label>
        <input id="date" name="date" type="date" placeholder="yy/mm/dd">
        <br>
        <button class="buttn"   type="submit">
        <span>SUBMIT </span>
        </button>
    </form>
        </div>
        </div>
    </div>
</div>

</template>
<script>
</script>
<style scoped>
.locate{
    padding-bottom:50%;
    position:relative;
}
/* .formblock{
    float:right;
    padding-bottom:800px!important;
} */
.locate > iframe {
    height: 50%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
}
.wack{
    margin-top:80px;
    color:black;
}
body{
    color:black;
}
.flo{
        font-family: 'Rye', sans-serif;
}
input {
    width: 100%;
    padding: 10px 0 10px 10px;
    margin: 0;
    border: 3px solid transparent;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #f8bcbc, -2px -2px -2px ;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.mdeck{
    width:50%;
}
.map{
    width:100%;
    height:100%;
    padding-top:40px;

}
.company-map{
    width:100%;
    height:100%;
    border:0;
    border-radius:6px;
}
.buttn{
    background-color:transparent;
    margin-top:10px;
}
.top{
    width:100%;
    height:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    margin-left: 80px;
}
.frow{
    float:right;
    display:flex;
    flex-wrap:wrap;
    padding:10px;
    padding-right:100px;
    color:white;
}
@media screen and (max-width:690px){
    .map-deck{
    width:100%;
}}
</style>