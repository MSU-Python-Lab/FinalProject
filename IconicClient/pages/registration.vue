
<template>
  <div class="main">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/gotham-pro?styles=24951" rel="stylesheet">
    <div class="label">
      <div id="iconicLabel" class="container">
        <p id="iconicTitle" class="ml-4">Iconic</p>
        <p id="iconicText">про твою уникальность</p>
      </div>
    </div>
    <div class="reg text-center">
      <H1 class="mt-5 mb-5">Registration</H1>
      <div class="input">
        <p>Login</p>
        <input >
      </div >
      <div class="input">
        <p>Name</p>
        <input >
      </div>
      <div class="input">
        <p>Surname</p>
        <input >
      </div>
      <div class="input">
        <p>Tel</p>
        <input >
      </div>
      <div class="input">
        <p>Email</p>
        <input >
      </div>
      <div class="input">
        <p>Password</p>
        <input >
      </div>
      <form action="dd">
        <button class="butReg">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<style>
:root{
  background-color: #F1F1F1;

}
.main{
  background-color: #F1F1F1;
  display: flex;
  justify-content: space-around; /*Центрирование по горизонтали*/
  align-items: center;
  height: 850px;
  font-family:'Gotham Pro';
  font-size: 20px;
}
.label{
  background-color: #E5E5E5;
  /*height:;*/
  width: 340px;
  border: 3px solid #148290;
  padding-block:480px ;

}
.input{
  width: 700px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  padding-left:-200px ;
}
input{
  width: 500px;
  height: 43px;
}
#iconicTitle {
  align-items: center;
  font-family: 'Birthstone Bounce';
  font-style: normal;
  font-weight: 400;
  font-size: 105px;
  margin-bottom: -30px;
}

#iconicText {
  margin-left: 40px;
  font-size: 17px;
}
button{
  width :279px;
  height :52px;
  margin-top: 50px;
  background-color: #1b6974;
}
button:hover{
  background-color: rgba(27, 105, 116, 80%);
}
</style>
