<template>
  <div class="pane">
    <p>This is the {{side}} pane!</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        side: "home",
        name: "欢迎来到主页"
      }
    }
  }
</script>
