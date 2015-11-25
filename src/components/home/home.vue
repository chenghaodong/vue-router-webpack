<template>
  <div class="view">
    <app-header ></app-header>
    <app-pane></app-pane>
  </div>
</template>

<script>
  require('./home.less');
  export default {
    data: function () {
      return {
/*        msg: 'This is page A.',
        leftName: 'Bruce Lee',
        rightName: 'Chuck Norris'*/
      }
    },
    components: {
      'app-header': require('../menu/sider.vue'),
      'app-pane': require('../pane/pane.vue')
    }
  }
</script>