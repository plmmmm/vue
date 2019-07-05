<template>
    <div class="login">
        <van-nav-bar 
        title="注册"
        left-text="返回"
        right-text="去登录"
        left-arrow
        @click-left="onClickLeft"
        @click="onClickRight"
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
            <span></span>
        </van-cell-group>
        <p class="lis" ref="regs">{{lis}}</p>
        <van-button type="info" @click="reg">注册</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            lis:''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push({
                path:'/login'
            })
        },
        reg(){
            let formDate = new FormData();
            formDate.append("username",this.username)
            formDate.append("password",this.password)
            axios({url:'/api/reg',data:formDate,method:'POST'})
                .then(
                    res=>{ if(res.data.error == 0){
                        this.lis="注册成功3秒后跳转登录页面"
                        setTimeout(()=>{
                            this.$refs.regs.style.opacity="1"
                            this.$router.push('/login')
                        },2000);
                    }else{
                        this.lis = "注册失败"
                        setTimeout(()=>{
                            this.$refs.regs.style.opacity="0"
                        },2000);
                    }
                    }
                )
        }
    },
}
</script>
<style scoped>
.van-button{background: #1989fa;margin: 10px 0;}
.van-button--normal{width: 80%;margin-left: 30px;}
.lis{width: 100%;height: 20px;text-align: center;}
</style>

