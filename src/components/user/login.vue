<template>
  <div class="container">
    <div class="row vertical-offset-100">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="row-fluid user-row">
              <img src="../images/logo/logo.png" class="img-responsive" alt="welcome your login"/>
            </div>
          </div>
          <div class="panel-body">
              <form id="defaultForm" role="form" class="form-signin">
                <fieldset>
                  <div class="form-group has-feedback">
                    <input class="form-control" type="text" placeholder="请输入手机号码" maxlength="11" v-model="userName" v-on:blur="checkPhone(userName)">
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" v-if="right1 && userName"></span>
                    <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" v-if="wrong1 && userName"></span>
                    <p class="messages">{{messages1}}</p>
                  </div>
                  <div class="form-group has-feedback">
                    <input class="form-control" maxlength="20" type="password" placeholder="请输入密码" v-model="password" v-on:blur="checkPassword(password)">
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" v-if="right2 && password"></span>
                    <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" v-if="wrong2 && password"></span>
                    <p class="messages">{{messages2}}</p>
                  </div>
                </fieldset>
              </form>
            <button class="btn btn-lg btn-success btn-block"  v-on:click="loginIn">{{loginName}}</button>
            <p class="footer"><a  class="register" v-link="{ path: 'register' }">{{ register }}</a> | <a class="forget" v-link="{ path: 'forget' }"> {{ forgetName }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  require('./login.less');
  export default {
    data: function(){
      return {
        loginName: "登录 >>" ,
        register: "还没有账号，马上注册一个" ,
        forgetName: "忘记密码" ,
        right1: false ,//
        wrong1: false ,
        right2: false ,//
        wrong2: false ,
        checkValidator: false,
        messages1: "",
        messages2: ""
      }
    },
    methods: {
      /*判断是否是电话号码*/
      checkPhone: function(value){
        var re =/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9]|)\d{8}$/;
        var patrn=/^[0-9]{1,20}$/;
        if (re.test(value)&&patrn.test(value)) {
            this.messages1 = "";
            this.right1 = true ;
            this.wrong1 = false
        } else {
            this.messages1 = "* 电话号码全部为数字，以13、15、18等开始且长度为11位";
            this.right1 = false ;
            this.wrong1 = true
        }
      },
      /*以字母开头，长度在6-18之间，只能包含字符、数字、下划线*/
      checkPassword: function(value){
        var patrn=/^[a-zA-Z0-9]\w{5,20}$/;
        if (patrn.test(value)) {
          this.messages2 = "";
          this.right2 = true ;
          this.wrong2 = false
        } else {
          this.messages2 = "* 密码长度在6-20之间，只能包含字符、数字、下划线";
          this.right2 = false ;
          this.wrong2 = true
        }
      },
      loginIn: function(){
        this.$route.router.go('/home')
      }
    }
  };
</script>