<template>
    <div class="information">
        <van-nav-bar
            title="最新剧情"
        />
        <van-panel
        v-for="(item,index) of info"
        :key="index"
        :title="item.title"
        :desc="item.cont"
        :status="'更新：'+item.date">

            <img class="imgs" :src="item.ims" alt="" />
            <span class="p1">{{item.use}}</span>
        </van-panel>
        <loading></loading>
    </div>
</template>

<script>
import state from "../store/state"
import loading from "../components/loading"
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters([
        'info'
    ]),
    mounted(){
        this.$store.dispatch('INFO');
        console.log(this.info);


        // axios({url:'../../dist/data/d.json'}).then(
        //     res=>{
        //         this.list = res.data.data;
        //         console.log(res.data.data)
        //     }
        // )
    },
    components:{loading}
}
</script>

<style scoped>
    .van-nav-bar{background:#6495ED;}
    .imgs{height: 20px;width: 20px;float: left;margin: 2px 0 0 4px;border-radius: 50%;}
    .p1{display: inline-block;font-size: 12px;line-height: 20px;margin: 4px 0 0 10px}
    .van-cell__value{font-size: 12px;}
    .van-panel__content{height: 26px;}
    .van-panel__header{background:#fafafa;}
    .van-hairline--top-bottom{margin: 0 0 10px 0;}
    .van-cell-group{background: #eeeded;}
    .van-cell__label{width: 260px;}
</style>
