<template>
  <NavBarcomp/>
  <router-view/>
<Footercomp/>

</template>
<script>
import NavBarcomp from "./components/NavBarComp.vue";
import Footercomp from "./components/footerComp.vue";

export default{
  components:{NavBarcomp , Footercomp}
}
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/doulos-sil-compact');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(0,0,0)!important;
<<<<<<< HEAD
 background: linear-gradient(31deg, rgba(0,0,0,0.9921218487394958) 5%, rgba(115,115,115,1) 100%)!important; 
=======
 background: linear-gradient(31deg, rgba(0,0,0,0.9921218487394958) 5%, rgba(115,115,115,1) 100%)!important;
>>>>>>> 126c192ae95ecb39a752fbad0e6ff8f6065639ad
}

nav {
  padding: 30px;
  text-align:center!important;
  font-family: 'Doulos SIL Compact', sans-serif!important;
}
.collapse{
    display: flex !important;
  justify-content: center  !important;
}
nav a {
  font-size: 20px!important;
  color: #ffff!important;
}
nav a:hover{
  text-decoration: 5px underline;
  text-decoration-color: #00bf63;
}

nav a.router-link{
  font-size:80px!important;
  font-family: 'Doulos SIL Compact', sans-serif!important;
}
nav a.router-link-exact-active {
  font-family: 'Doulos SIL Compact', sans-serif!important;
}


footer{
  background-color:transparent!important;
}
footer>h6{
  font-family: 'Doulos SIL Compact', sans-serif!important;
}
*{
  overflow-x: hidden!important;
}
</style>
