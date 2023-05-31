<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>新闻动态</h3>
                <p style="color:#b2b2b2">Company News</p>
            </div>
            <div class="nav container text-center">
                <a href="#" class="active">公司新闻</a>
                <!-- <a href="#">行业动态</a> -->
            </div>
            <ul class="news-container container-fuild">
                <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn">
                    <div class="content">
                        <p>{{item.title}}</p>
                        <p>{{item.introduce}}</p>
                    </div>
                    <div class="time">
                        <p>{{item.date}}</p>
                        <span>{{item.year}}</span>
                    </div>
                    <div class="circle">
                        <img src="../assets/img/circle.png">
                        <i class="line center-block"></i>
                    </div>
                </li>
            </ul>
            <div class="contaianer-fuild text-center more">
                <i class="glyphicon glyphicon-th"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformation',
    data(){
        return{
            newsList:[
                {
                    id: '001',
                    title: 'chatwoot 上线',
                    introduce: '汤米科技汤米CRM/SCRM试运营 https://crm.tommytech.online',
                    date: '04-30',
                    year: '2023'
                },{
                    id: '002',
                    title: '公众号上线',
                    introduce: '汤米科技微信公众号上线',
                    date: '04-29',
                    year: '2023'
                },{
                    id: '003',
                    title: 'chatwoot 正式定制',
                    introduce: '汤米科技工作室正式基于chatwoot定制化开发CRM系统',
                    date: '04-14',
                    year: '2023'
                },{
                    id: '004',
                    title: 'ICP 备案',
                    introduce: '汤米科技工作室正式备案 鄂ICP备2023005873号-1',
                    date: '03-30',
                    year: '2023'
                },{
                    id: '005',
                    title: '官网上线',
                    introduce: '汤米科技工作室官网 https://www.tommytech.online 上线',
                    date: '03-30',
                    year: '2023'
                },{
                    id: '006',
                    title: 'Kick Off',
                    introduce: '武汉市汤米科技工作室正式成立。',
                    date: '03-23',
                    year: '2023'
                }
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
.nav{
    margin: 20px 0;
}
.nav>a{
    display: inline-block;
    text-decoration: none;
    width: 120px;
    height: 45px;
    line-height: 45px;
    color: #333;
    border: 1px solid #333;
}
.nav>a.active{
    color: #1e73be;
    border-color: #1e73be;
}
.nav>a:hover{
    color: #1e73be;
    border-color: #1e73be;
}
.news-container{
    overflow: hidden;
    margin-bottom: 0;
}
.news-container>li{
    width: 55.6%;
    height: 120px;
    float: left;
    color: #333;
    text-align: right;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
}
.news-container>li:hover{
    color: #1e73be;
    border: 1px solid #1e73be;
    cursor: pointer;
}
.news-container>li:nth-of-type(2n){
    float: right;
    text-align: left;
}
.news-container>li>.content{
    width: 60%;
    float: left;
    padding: 20px 0;
}
.news-container>li>.time{
    width: 20%;
    float: left;
    padding: 10px 0;
}
.news-container>li>.time>p{
    font-size: 30px;
    margin: 5px 0;
}
.news-container>li>.circle{
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
}
.news-container>li>.circle>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
}
.news-container>li>.circle>i{
    display: block;
    width: 1px;
    height: 100%;
    background: #707070;
}
.news-container>li:nth-of-type(2n)>.content{
    float: right;
}
.news-container>li:nth-of-type(2n)>.time{
    float: right;
}
.news-container>li:nth-of-type(2n)>.circle{
    float: right;
}
.news-container>li:nth-of-type(1)>.circle>i{
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.more{
    font-size: 25px;
    color: #707070;
}
.more>i{
    cursor: pointer;
}
@media screen and (max-width: 767px){
    .news-container>li{
        width: 100%;
    }
    .news-container>li>.content{
        width: 70%;
        text-align: left;
        float: right;
    }
    .news-container>li>.time{
        width: 30%;
        text-align: left;
        float: right;
    }
    .news-container>li>.circle{
        display: none;
    }
}
</style>

