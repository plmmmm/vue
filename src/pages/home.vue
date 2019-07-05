<template>
    <div class="home">
            <!-- <list :list="list" :dataName="'home'"></list> -->

        <van-row>
            <van-col span="4">
                动漫
            </van-col>
            <van-col span="16">
                言叶之庭
            </van-col>
            <van-col span="4">
                <van-icon class="qr" name="qr" size="50px" color="pink" />
            </van-col>
        </van-row>
        <van-swipe :autoplay="3000" vertical :height="230">
            <van-swipe-item 
            indicator-color="#777" 
            v-for="(item,index) of imges"
            :key="index">
                <img :src="item" class="swipe-item-img" />
            </van-swipe-item>
        </van-swipe>
        <van-search 
        shape="round"
        placeholder="请输入搜索关键词"
        v-model="value"
        label="言叶之庭"
        @search="onSearch"
        show-action
        >
            <div slot="action" @click="onSearch">
                搜索
            </div>
        </van-search>



        
        <van-card
        v-for="(item) of list"
        :key="item.id"
        :desc="item.user1"
        :title="item.user"
        :thumb="item.imgs"
        @click="abc"
        >
            <list :list="list" :dataName="'home'"></list>

        </van-card>
        
        <loading></loading>

    </div>

</template>
<script>
import list from '../components/list'
import loading from "../components/loading"

export default {
    data(){
        return {
            value:'',
            imges:[ 
                '/assets/img/s1 (1).jpg',
                '/assets/img/s1 (2).jpg',
                '/assets/img/s1 (3).jpg',
                '/assets/img/s1 (4).jpg'
            ],
            list:[]
        }
    },
    methods:{
        onSearch(){},
        abc(){
            this.$router.push({
                path:'/detail'
            })
        }
    },
    components:{list,loading},
    mounted() {
        axios({url:'data/b.json'}).then(
            (res)=>{
                this.list = res.data;
                // console.log(res.data);
                // console.log(this.list);
            }
        )
    },
}

</script>
<style scoped>
    .logo{text-align: center;line-height: 40px;}
    .logo1{text-align: center;line-height: 40px;width: 100%;}
    .van-col--16{height: 40px;text-align: center;line-height: 40px;color: blue;}
    .van-col--4{height: 40px;text-align: center;line-height: 40px;color: blue;}
    .swipe-item-img{width: 100%;}
    .van-swipe{height: 150px;margin-top: 10px;}
    .van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
</style>
 