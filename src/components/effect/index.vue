<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>成效</h2>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/common/index';
export default {
  name: 'effect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      'tab-bar':tabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
