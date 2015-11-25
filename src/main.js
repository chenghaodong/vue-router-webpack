var Vue = require('vue');
var VueRouter = require('vue-router');
var route = require('./routes');
var validator = require('vue-validator');

Vue.use(VueRouter);
Vue.use(validator);

var router = new VueRouter({
    hashbang: true,
    history: false
});


var App = Vue.extend(require('./app.vue'));

route(router);

router.start(App, '#app');
