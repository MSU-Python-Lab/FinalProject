<template>
  <header>
  <div class= "front_reg"></div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap" rel="stylesheet">
		<link href="http://fonts.cdnfonts.com/css/gotham-pro?styles=24951" rel="stylesheet">
   <nuxt-link class= "button butReg" to="entrance">Войти</nuxt-link>
    <nuxt-link class= "button butEntrance " to="registration">Зарегистрироваться</nuxt-link>

    <img id="notebook" src="@/static/images/notebook.png">
		<p class = "iconic">Iconic</p>
		<p class = "iconic_down">про твою уникальность</p>
		<div id = "border"></div>
		<div id = "reg_background"></div>
   </header>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

 <style>
 header {
  min-height: 100vh;
  background-color: #F1F1F1;
  background-size: cover;
  position: relative;
 }
  .front_reg{
  position: absolute;
width: 370px;
height: 409px;
left: 811px;
top: 179px;

background: #FFFFFF;
border-radius: 10px;
}
.iconic {
	position: absolute;
width: 250px;
height: 120px;
left: 875px;
top: 210px;

font-family: 'Birthstone Bounce';
font-style: normal;
font-weight: 400;
font-size: 105px;
line-height: 143px;

color: #383434;

}

.iconic_down{
  position: absolute;
width: 217px;
height: 17px;
left: 891px;
top: 339px;

font-family: 'Gotham Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 17px;

color: #000000;

}

#border{
  box-sizing: border-box;

position: absolute;
width:100%;
max-width: 291px;
height: 161px;
left: 850px;
top: 218px;

border: 3px solid #383434;
border-radius: 10px;
}

#notebook{
position: absolute;
height: 365px;
  margin-top: 200px;
  margin-left: 120px;
}

  .button{
position: absolute;
left: 870px;
font-size: 16px;
border-radius: 10px;
font-family: 'Gotham Pro';
width: 250px;
height:50px;
font-weight:bold;
text-align: center;
color: white;
padding: 13px;
}

.butReg{

  background-color: #27E0D5;
top: 420px;
padding-left:20px;
}

.butEntrance{

 background-color: #148291;
top: 500px;
padding-left:30px;
}
</style>
