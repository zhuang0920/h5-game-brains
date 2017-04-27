<template>
  <div class="hello">
    <h2>游戏111</h2>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      items : [
        {title:"记忆力",color:"#7D26CD",url:"",games:[
          {title:"缺少物品",desc:"哪个物品少了？"},
          {title:"有何不同",desc:"哪些物品发生了改变？"},
          {title:"麻将配对",desc:"你能匹配将牌吗？"}
          ]},
        {title:"解决问题",color:"#7CCD7C",url:""},
        {title:"注意力",color:"#CD9B1D",url:""},
        {title:"话",color:"#CD9B1D",url:""},
      ]
    }
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
