<template>
    <div class="container">
        <div class="row vertical-offset-100">
            <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xs-8 col-xs-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row-fluid user-row">
                            <img src="../../images/logo/logo.png" class="img-responsive" alt="Conxole Admin"/>
                        </div>
                    </div>
                    <div class="panel-body row">
                        <form id="defaultForm"class="defaultForm row">
                            <div class="form-group row has-feedback first">
                                <label class="col-lg-3 col-md-3 col-xs-4 control-label text-right">手机号</label>
                                <div class="col-lg-7 col-md-7 col-xs-7 ">
                                    <input class="form-control" type="text" maxlength="11" placeholder="请输入手机号" v-model="telphone" @blur="getTelphone(telphone)" />
                                    <p class="messages">{{ messages1 }}</p>
                                </div>
                            </div>
                            <div class="form-group row second">
                                <label class="col-lg-3 col-md-3 col-xs-4 control-label text-right movebottom">验证码</label>
                                <div class="col-lg-7 col-md-7 col-xs-7">
                                    <div class="input-group has-feedback">
                                        <input type="text" class="form-control" placeholder="请输入验证码" maxlength="6" v-model="verification" @blur="getVer(verification)" />
                                        <span class="input-group-addon verification" @click="getVerification">点击获取验证码</span>
                                        <span class="input-group-addon showTimes sr-only" v-model="showTimes"></span>
                                    </div>
                                    <p class="messages">{{ messages2 }}</p>
                                </div>
                            </div>
                            <div class="form-group row third">
                                <label class="col-lg-3 col-md-3 col-xs-4  control-label text-right movebottom">新密码</label>
                                <div class="col-lg-7 col-md-7 col-xs-7">
                                    <div class="input-group has-feedback">
                                        <input :type="passwordType" class="form-control" placeholder="请输入密码" maxlength="20" v-model="password" @blur="getPassword(password)">
                                        <span class="input-group-addon password" @click="showPassword" v-if="show">显示密码</span>
                                        <span class="input-group-addon password " @click="hidePassword" v-if="hide">隐藏密码</span>
                                    </div>
                                    <p class="messages">{{ messages3 }}</p>
                                </div>
                            </div>
                        </form>
                        <div class="submitBtn col-lg-offset-3 col-lg-7 col-md-offset-3 col-md-7 col-xs-offset-4 col-xs-7">
                            <button class="btn btn-lg btn-success btn-block" @click="register"> 找回 »</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    require('./forget.less');
    export default {
        data:function(){
            return {
                messages1: "",
                messages2: "",
                messages3: "",
                show: true,
                hide: false,
                passwordType: "password"
            }
        },
        methods: {
            getTelphone: function(value){
                var re =/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                var patrn=/^[0-9]{1,20}$/;
                if (re.test(value)&&patrn.test(value)) {
                    this.messages1 = "";
                } else {
                    this.messages1 = "* 电话号码全部为数字，以13、15、18等开始且长度为11位";
                }
            },
            getVer: function(){

            },
            getPassword: function(value){
                var patrn=/^[a-zA-Z0-9]\w{5,20}$/;
                if (patrn.test(value)) {
                    this.messages3 = "";
                } else {
                    this.messages3 = "* 密码长度在6-20之间，只能包含字符、数字、下划线";
                }
            },
            getVerification: function(){

            },
            showPassword: function(){
                this.hide = true;
                this.show = false;
                this.passwordType = "text"
            },
            hidePassword: function(){
                this.hide = false;
                this.show = true;
                this.passwordType = "password"
            },
            register: function() {
                this.$route.router.go('/login');
            }
        }
    }
</script>