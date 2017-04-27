<template>
<ul>
    <li><router-link :to="'train'">训练</router-link></li>
    <li><router-link :to="'game'">游戏</router-link></li>
    <li><router-link :to="'effect'">成效</router-link></li>
    <li><router-link :to="'setting'">设置</router-link></li>
</ul>
</template>

<script>
export default {
  name: 'tab-bar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>