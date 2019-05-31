<template>
  <div id="app">
    <greeting></greeting>
    <!-- <es5-greeting></es5-greeting> -->
    <nav-header></nav-header>
    <login-form></login-form>
    <my-button></my-button>
  </div>
</template>

<script>
  //ES5에서는.. 이런식으로 사용했었는데.. 
  // var cmp = {
  //   template: '<div> hello? </div>'
  // }

  // export default {
  //   components: {
  //     'login-form': cmp
  //   }
  // }

  //ES6에서는 이렇게 디렉토리 구조를 이용해서..유지보수하기도 쉽게, 코드 가독성높게, 모듈을 분리.
  import LoginForm from './components/LoginForm.vue'

  import Button from './components/Button.vue'

  export default {
    components: {
      'login-form': LoginForm,
      'my-button': Button
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
