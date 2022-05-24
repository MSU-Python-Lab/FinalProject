<template>
  <main id="main" class="d-flex min-vh-100 mr-auto ml-auto justify-content-center">
    <div class="d-flex"></div>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap" rel="stylesheet">
    <link href="http://fonts.cdnfonts.com/css/gotham-pro?styles=24951" rel="stylesheet">
    <div class=" d-flex align-items-center ">
      <div>
        <img id="notebook" src="@/static/images/notebook.png">
      </div>
      <div id="iconicFull" class="m-5">
        <div id="iconicLabel" class="container">
          <p id="iconicTitle" class="ml-4">Iconic</p>
          <p id="iconicText">про твою уникальность</p>
        </div>
        <div id="but" class="container m-4">
          <form action="/login">
            <button class="butEntrance">Войти</button>
          </form>
          <form action="/registration">
            <button class="butReg">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
    <div class="d-flex"></div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
#main {
  background-color: #E5E5E5;
}

#notebook {
  position: center;
  height: 400px;

}

#iconicLabel {
  border: 3px solid #383434;
  border-radius: 18px;
  margin: 10%;
  width: 80%;
  height: 40%;

}

#iconicFull {

  background-color: #F1F1F1;
  border-radius: 18px;
  width: 400px;
  height: 450px;
}

button {
  font-family: 'Gotham Pro';
  height: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-left: 30px;
  margin-top: 20px;
  width: 70%;
  border-radius: 18px;
  border: 0px solid;
}

button:hover {

}

.butReg {
  background-color: rgba(39, 224, 213, 100%);
}

.butReg:hover {
  background-color: rgba(39, 224, 213, 80%);
}

.butEntrance {
  background-color: rgba(20, 130, 145, 100%);
}

.butEntrance:hover {
  background-color: rgba(20, 130, 145, 80%);
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
  font-family: 'Gotham Pro';
  margin-left: 40px;
  font-size: 17px;
}

</style>
