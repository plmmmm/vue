<template>
    <div class="login">
        <van-nav-bar
        title="登录"
        left-text="返回"
        right-text="去注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />

        <van-cell-group>
            <van-field
            v-model="username"
            clearable
            label="用户名"
            placeholder="请输入用户名"
            left-icon="contact"
            @click-right-icon="$toast('question')"
            />

            <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            left-icon="bulb-o"
            />
        </van-cell-group>
        <p class="lis" ref="regs">{{lis}}</p>
        <van-button type="info" @click="btnlogin">登录</van-button>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            error:false,
            lis:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push({
                path:'/reg'
            })
        },
        btnlogin(){
            this.$store.dispatch(
                'USER',{
                username:this.username,
                password:this.password
                    }
            ).then(
                data=>{
                    if(data.error == 0){
                        localStorage.setItem('vue_user',JSON.stringify(data))
                        this.lis="登录成功";
                        console.log("您已登录成功")
                        setTimeout(()=>{
                            this.$refs.regs.style.opacity="1"
                            this.$router.push('/user')
                        },2000);
                    }else{
                        this.error = true
                        this.lis = "登录失败";
                        console.log("登录失败");
                        setTimeout(()=>{
                            this.$refs.regs.style.opacity="0"
                        },2000);
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.van-button{background: #1989fa;margin: 10px 0;}
.van-button--normal{width: 80%;margin-left: 30px;}
.lis{width: 100%;height: 20px;text-align: center;}
</style>
