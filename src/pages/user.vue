<template>
    <div class="user">
        <van-nav-bar
            title="我的"
            right-text="登录"
            @click-right="onClickRight"
        />
        <van-card
            :desc="liat.netname"
            :title="liat.autograph"
            :thumb="imageURL"
        />

        <van-cell value="查看全部" icon="aim" is-link>
            <template slot="title">
                <span class="custom-text">人物</span>
                <van-tag round type="danger">新增</van-tag>
            </template>
        </van-cell>
        <van-cell value="修改" icon="location-o" is-link>
            <template slot="title">
                <span class="custom-text">地址信息</span>
            </template>
        </van-cell>
        <van-button size="large" @click="logout">退出登录</van-button>
    </div>
</template>

<script>
import store from '../plugins/store'
export default {
    data(){
        return {
            imageURL:'../assets/img/m1.jpg',
            activeName:'1',
            liat:''
        }
    },
    beforeRouteEnter (to, from, next) {
        if(store.state.user.error==0){
            next()
        }else{
            next('/login')
        }
    },
    methods:{
        onClickRight(){
            this.$router.push({
               path:'login'
            })
        },
        logout(){
            // console.log(1)
            // ../../dist/data/a.json
            axios({url:'/data/a.json',method:'GET'}).then(
                data=>{
                    if(data.data.error == 0){
                        
                        this.$store.commit('USER',{error:1})
                        localStorage.removeItem('vue_user')
                        this.$router.push('/home')
                    }
                }
            )
        }
    },
    mounted () {
        this.liat = this.$store.state.user.data;
        console.log(this.$store.state.user.data)
    }
}
</script>

<style scoped>
.van-card__img{border-radius: 50%;height: 50px;width: 50px;}
.van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
.van-tag{margin-left: 4px;font-size:8px;}
.van-button{background: red;}
</style>
