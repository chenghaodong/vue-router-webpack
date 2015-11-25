<template>
<!--        <div>
            <button v-on="click: removeTodo($index)">X</button>
            <input v-model="msg">
            <h1><a v-on="click: alet">欢迎来到我的第一个vue+webpack</a></h1>
            <a  v-link = "{ path: '/foo' }">Go to Foo</a>
            <a v-link = "{ path: '/bar' }">Go to Bar</a>
        </div>-->
    <router-view></router-view>
</template>

<script>
    require('./app.less');
/*    export default {
/!*        data: function(){
            return {msg:"111"}
        },
        methods: {
            removeTodo: function(index) {
                    this.msg = '';
            },
            alet: function(){
                alert("haha");
            }
        }*!/
    }*/
</script>