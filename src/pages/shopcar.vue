<template>
    <div class="amusement">
        <van-nav-bar
        title="周边商城"/>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            
            <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
        
                <van-card
                v-for="(item) of shoppe"
                :key="item.id"
                :tag="item.netname"
                :price="item.num"
                :desc="item.synopsis"
                :title="item.use"
                :thumb="item.nik"
                :origin-price="item.sum"
                >

                <div slot="footer">
                    <van-button size="mini">加入购物车</van-button>
                </div>
                </van-card>

            <!-- <van-cell
                v-for="item in list"
                :key="item"
            /> -->
            </van-list>
        </van-pull-refresh>
        <loading></loading>
    </div>
</template>

<script>
import loading from "../components/loading"
import {mapGetters} from "vuex"

export default {
    data(){
        return {
            list:[],
            loading:false,
            finished:false,
            imageURL:'../assets/img/1.jpg',
            abc:"",
            isLoading:true,
        };
    },
    computed:mapGetters([
        'shoppe'
    ]),
    mounted () {
        this.$store.dispatch('SHOPPE')
    },
    components:{loading},
    methods: {
        onRefresh(){
            setTimeout(()=>{
                this.$toast('刷新成功');
                this.isLoading = false;
            },500);
        },
        onLoad(){
            //异步更新数据
            setTimeout(()=>{
                for(let i = 0;i < 10;i++){
                    this.list.push('this.list.length + 1');
                }
            //加载状态结束
            this.loading = false;

            //数据全部加载完成
            if(this.list.length >=10){
                this.finished = true;
            }
            },500);
        }
    }
}
</script>

<style scoped>
    .van-nav-bar{background:#6495ED;}
    .van-button{background: coral; color: #fff;}
</style>
