<template>
    <div class="hello">
        <mu-tabs :value="activeTab" @change="handleTabChange" style="margin-bottom:0.01rem;">
            <mu-tab value="tab1" title="精选" />
            <mu-tab value="tab2" title="资讯" />
            <mu-tab value="tab3" title="内参" />
            <!-- <mu-tab value="tab4" title="视频" /> -->
            <mu-tab value="tab5" title="活动" />
        </mu-tabs>
        <div v-show="activeTab === 'tab1'">
            <div v-if="featuredItem" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20" class="tab-content">
                <div class="index-content-box" v-for="item in featuredItem ">
                    <div class="head-bannner  img0" v-if="item.headFlag">
                        <router-link :to="{path: 'id' +'?id=' +item.newsId }">
                            <img :src="item.homeImage">
                            <div class="head-title">
                                <div class="inform">{{item.newsTitle.length > 19 ? item.newsTitle.substring(0,19):item.newsTitle}}<span>{{item.newsTitle.length > 19 ?'...':''}}</span></div>
                                <div class="bg"></div>
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==1 && item.headFlag!=true">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId }">
                            <div class="content img1">
                                <div class="left-box ">
                                    <div class="title">{{item.newsTitle.length > 22 ? item.newsTitle.substring(0,22):item.newsTitle}}<span>{{item.newsTitle.length > 22?'...':''}}</span></div>
                                    <!-- <div class="personnumber-box"><span>阅读量10000+</span>
                                            <img src="../assets/admire-empty.png">&nbsp&nbsp{{item.stars}}</div> -->
                                </div>
                                <div class="right-box">
                                    <img :src="item.homeImage">
                                </div>
    
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==2">
                        <router-link :to="{path: 'id' +'?id=' +item.newsId }">
                            <div class="bigcontent">
                                <div class="title">{{item.newsTitle}}</div>
                                <div class="video-wrap">
                                    <video id="Html5Video" controls="controls" autoplay preload="auto" poster="./../assets/0.jpg" width="100%" style="height=4.666667rem">
                                				                    <source  :src="item.mediaUrl" type='video/mp4;'/>
                                			                </video>
    
                                </div>
                            </div>
                        </router-link>
                    </div>
    
                </div>
                <div class="small-loading" v-show="smallLoading">正在加载...</div>
            </div>
            <div v-else class="emitdata">无数据</div>
        </div>
        <div v-show="activeTab === 'tab2'">
            <div v-if="consultingItem" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20" class="tab-content">
                <div class="index-content-box" v-for="item in consultingItem">
                    <div class="head-bannner  img0" v-if="item.headFlag">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId }">
                            <img :src="item.homeImage">
                            <div class="head-title">
                                <div class="inform">{{item.newsTitle.length > 19 ? item.newsTitle.substring(0,19):item.newsTitle}}<span>{{item.newsTitle.length > 19 ?'...':''}}</span></div>
                                <div class="bg"></div>
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==1 && item.headFlag!=true">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId  }">
                            <div class="content img1">
                                <div class="left-box ">
                                    <div class="title">{{item.newsTitle.length > 22 ? item.newsTitle.substring(0,22):item.newsTitle}}<span>{{item.newsTitle.length > 22 ?'...':''}}</span></div>
                                    <!-- <div class="personnumber-box"><span>阅读量10000+</span>
                                            <img src="../assets/admire-empty.png">&nbsp&nbsp{{item.stars}}</div> -->
                                </div>
                                <div class="right-box">
                                    <img :src="item.homeImage">
                                </div>
    
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==2">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId  }">
                            <div class="bigcontent">
                                <div class="title">{{item.newsTitle}}</div>
                                <div class="video-wrap">
                                    <video id="Html5Video" class="video-js vjs-default-skin" preload controls autoplay width="100%">
                                				                    <source id="src1" :src="item.mediaUrl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                			                    </video>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                 <div class="small-loading" v-show="consultingLoading">正在加载...</div>
            </div>
            <div v-else class="emitdata">无数据</div>
        </div>
        <div v-show="activeTab === 'tab3'">
            <div v-if="InternalItem" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="tab-content">
                <div class="index-content-box" v-for="item in InternalItem ">
                    <div class="head-bannner  img0" v-if="item.headFlag">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId  }">
                            <img :src="item.homeImage">
                            <div class="head-title">
                                <div class="inform">{{item.newsTitle.length > 19 ? item.newsTitle.substring(0,19):item.newsTitle}}<span>{{item.newsTitle.length > 19 ?'...':''}}</span></div>
                                <div class="bg"></div>
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==1 && item.headFlag!=true">
                        <router-link :to="{path: 'id' +'?id=' +item.newsId  }">
                            <div class="content img1">
                                <div class="left-box ">
                                    <div class="title">{{item.newsTitle.length > 22 ? item.newsTitle.substring(0,22):item.newsTitle}}<span>{{item.newsTitle.length > 22 ?'...':''}}</span></div>
                                    <!-- <div class="personnumber-box"><span>阅读量10000+</span>
                                            <img src="../assets/admire-empty.png">&nbsp&nbsp{{item.stars}}</div> -->
                                </div>
                                <div class="right-box">
                                    <img :src="item.homeImage">
                                </div>
    
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==2">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId  }">
                            <div class="bigcontent">
                                <div class="title">{{item.newsTitle}}</div>
                                <!-- <div>
                                                                                <img src="../assets/3.jpg">
                                                        
                                                                            </div> -->
                                <div class="video-wrap">
                                    <!-- <img src="../media/demo.jpg"> -->
                                    <video id="video" :src="item.mediaUrl"></video>
                                    <!-- <span class="play"></span> -->
                                </div>
                            </div>
                        </router-link>
                    </div>
    
                </div>
                <div class="small-loading" v-show="InternalLoading">正在加载...</div>
            </div>
            <div v-else class="emitdata">无数据</div>
        </div>
        <!-- <div v-show="activeTab === 'tab4'">
                    <div v-if="videoItem">
                        <div class="index-content-box" v-for="item in videoItem">
                            <div v-if="item.catId==2">
                                <router-link :to="{ path: '' + item.newsId }">
                                    <div class="bigcontent">
                                        <div class="title">{{item.newsTitle}}</div>
                                        <div class="video-wrap">
                                            <video id="Html5Video" class="video-js vjs-default-skin" preload controls autoplay width="100%">
                                				                    <source id="src1" :src="item.mediaUrl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                			                         </video>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
            
                        </div>
                    </div>
                    <div v-else class="emitdata">无数据</div>
                </div> -->
        <div v-show="activeTab === 'tab5'">
            <div v-if="activityItem" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="tab-content">
                <div class="index-content-box" v-for="item in activityItem ">
                    <div class="head-bannner  img0" v-if="item.headFlag">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId }">
                            <img :src="item.homeImage">
                            <div class="head-title">
                                <div class="inform">{{item.newsTitle.length > 19 ? item.newsTitle.substring(0,19):item.newsTitle}}<span>{{item.newsTitle.length > 19 ?'...':''}}</span></div>
                                <div class="bg"></div>
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==1 && item.headFlag!=true">
                        <router-link :to="{path: 'id' +'?id=' +item.newsId  }">
                            <div class="content img1">
                                <div class="left-box ">
                                    <div class="title">{{item.newsTitle.length > 22 ? item.newsTitle.substring(0,22):item.newsTitle}}<span>{{item.newsTitle.length > 22 ?'...':''}}</span></div>
                                    <!-- <div class="personnumber-box"><span>阅读量10000+</span>
                                            <img src="../assets/admire-empty.png">&nbsp&nbsp{{item.stars}}</div> -->
                                </div>
                                <div class="right-box">
                                    <img :src="item.homeImage">
                                </div>
    
                            </div>
                        </router-link>
                    </div>
                    <div v-if="item.catId==2">
                        <router-link :to="{ path: 'id' +'?id=' +item.newsId  }">
                            <div class="bigcontent">
                                <div class="title">{{item.newsTitle}}</div>
                                <div class="video-wrap">
                                    <video id="Html5Video" class="video-js vjs-default-skin" preload controls autoplay width="100%">
                                				                    <source id="src1" :src="item.mediaUrl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                			                    </video>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                 <div class="small-loading" v-show="activityLoading">正在加载...</div>
            </div>
            <div v-else class="emitdata">无数据</div>
        </div>
    </div>
</template>

<script>
    // import {  TabItem } from 'vux'
    import Vue from 'vue'
    import {
        InfiniteScroll
    } from 'mint-ui';
    Vue.use(InfiniteScroll);
    import {
        Indicator
    } from 'mint-ui';
    export default {
        name: 'home',
        created() {
            this.getIndexData()
        },
        // mounted() {
        //     this.$nextTick(() => {
        //          this.getIndexData()
        //     })
        // },
        data() {
            return {
                activeTab: 'tab1',
                topitem: {},
                featuredItem: [],
                consultingItem: [],
                InternalItem: [],
                activityItem: [],
                consultingObj:{pageNum :1},
                InternalObg:{pageNum :1},
                activityObj:{pageNum :1},
                videoItem: [],
                smallLoading:false,
                itemLoading:false,
                consultingLoading:false,
                InternalLoading:false,
                activityLoading :false,
                pageNum:1,
                pageSize:8,
                total:0,
                // loading:'true'
                // mediaUrl:''
            }
        },
        watch: {
            topPopup(val) {
                if (val) {
                    setTimeout(() => {
                        this.topPopup = false
                    }, 2000)
                }
            }
        },
        methods: {
            handleTabChange(val) {
                this.dataItem = [];
                this.activeTab = val
                switch (val) {
                    case 'tab1':
                        this.getIndexData('change')
                        break;
                    case 'tab2':
                        this.getdata(2, 'consultingItem','tabchange','consultingObj')
                        break;
                    case 'tab3':
                        this.getdata(3, 'InternalItem','tabcheange','InternalObg')
                        break;
                    case 'tab4':
                        this.getdata(4, 'videoItem','tabcheange','videoObj')
                        break;
    
                    case 'tab5':
                        this.getdata(5, 'activityItem','tabcheange','activityObj')
                        break;
                }
            },
            handleActive() {
                window.alert('tab active')
            },
            getdata(id, itemName, isper,objname) {
                self = this
                if (!this[itemName].length) {
                    if (isper!='per') {
                        Indicator.open('Loading...');
                    }
                    $.ajax({
                        type: "get",
                        url: baseUrl + "/news/searchNews",
                        contentType: "application/json;charset=utf-8;",
                        data: {
                            columnId: id,
                            pageSize: this.pageSize,
                            pageNum: 1,
                        },
                        dataType: "json",
                        success: function(res) {
                            if (res.code == 1) {
                                Indicator.close();
                                self[itemName] = res.data;
                                if( res.data.length > 6){
                                    // alert(1)
                                    self.checkloading(itemName)
                               }
                            //    console.log(objname,"self[objname]")
                            //    console.log(res.total,"res.total")
                               self[objname].total = res.total;
                                // console.log(itemName, "self[itemName] ")
    
                            } else {
                                Indicator.close();
                                self[itemName] = ''
                            }
                        },
                        error: function(error) {
                            self[itemName] = [];
                            // console("error=" + error);
                        }
                    });
                }else{
                   if(isper!='per')return
                   console.log(this[objname].pageNum ,"this[objname].pageNum ")
                   
                    if(this[objname].pageNum > this[objname].total/this.pageSize){
                            this.closeloading(itemName)
                        return }
                    ++ this[objname].pageNum 
                    $.ajax({
                        type: "get",
                        url: baseUrl + "/news/searchNews",
                        contentType: "application/json;charset=utf-8;",
                        data: {
                            columnId: id,
                            pageSize: this.pageSize,
                            pageNum: this[objname].pageNum,
                        },
                        dataType: "json",
                        success: function(res) {
                            if (res.code == 1) {
                                res.data.forEach((item)=>{
                                    self[itemName].push(item);
                                })
                                // console.log(itemName, "self[itemName] ")
    
                            } else {
                                Indicator.close();
                                self[itemName] = ''
                            }
                        },
                        error: function(error) {
                            self[itemName] = [];
                            // console("error=" + error);
                        }
                    });
                }
            },
            getIndexData(data) {
                let self = this
                if (!this['featuredItem'].length) {
                    Indicator.open('Loading...');
                    $.ajax({
                        type: "get",
                        url: baseUrl + "/news/searchNews",
                        contentType: "application/json;charset=utf-8;",
                        data: {
                            showFlag: "true",
                            pageSize: this.pageSize,
                            pageNum: 1,
                        },
                        success: function(res) {
                            if (res.code == 1) {
                               if( res.data.length > 6){
                                    self.smallLoading = true
                               }
                                Indicator.close();
                                self.featuredItem = res.data;
                                self.total = res.total
                                // let allItems = ['consultingItem','InternalItem','videoItem','activityItem']
                                self.getdata(2, 'consultingItem', 'per','consultingObj')
                                self.getdata(3, 'InternalItem', 'per','InternalObg')
                                self.getdata(5, 'activityItem', 'per','activityObj')
    
                            }
                        },
                        error: function(error) {
                            Indicator.close();
                            // console("error=" + error);
                        }
                    });
                }else{
                    // console.log(1)
                    if(data)return
                    if(this.pageNum > this.total/this.pageSize){
                     
                            this.smallLoading = false
                        
                        return }
                    ++ this.pageNum
                     $.ajax({
                        type: "get",
                        url: baseUrl + "/news/searchNews",
                        contentType: "application/json;charset=utf-8;",
                        data: {
                            showFlag: "true",
                            pageSize:this.pageSize,
                            pageNum: this.pageNum,
                        },
                        success: function(res) {
                            if (res.code == 1) {
                                res.data.forEach((item)=>{
                                     self.featuredItem.push(item);
                                })
                                // console.log(  self.featuredItem)
                            }
                        },
                        error: function(error) {
                            Indicator.close();
                            console("error=" + error);
                        }
                    });
                }
            },
           checkloading(data){
               console.log(data,"data")
                switch (data) {
                    case 'consultingItem':
                        this.consultingLoading = true
                        break;
                    case 'InternalItem':
                         this.InternalLoading = true
                        break;
                    case 'activityItem':
                       this.activityLoading = true
                        break;
                        }
            },
            closeloading(data){
                switch (data) {
                    case 'consultingItem':
                        this.consultingLoading = false
                        break;
                    case 'InternalItem':
                         this.InternalLoading = false
                        break;
                    case 'activityItem':
                       this.activityLoading = false
                        break;
                        }
            },
            loadMore() {
                setTimeout(() => {
                    switch (this.activeTab) {
                    case 'tab1':
                        this.getIndexData()
                        break;
                    case 'tab2':
                        this.getdata(2, 'consultingItem','per','consultingObj')
                        break;
                    case 'tab3':
                        this.getdata(3, 'InternalItem','per','InternalObg')
                        break;
                    case 'tab4':
                        this.getdata(4, 'videoItem','per','videoObj')
                        break;
    
                    case 'tab5':
                        this.getdata(5, 'activityItem','per','activityObj')
                        break;
                }
                }, 2500);
            }
            // loadMoreActive(){

            // }
            // getVideo() {
            //     (function() {
            //         var video, output;
            //         var scale = 0.8;
            //         var initialize = function() {
            //             output = document.getElementById("output");
            //             video = document.getElementById("Html5Video");
            //             video.addEventListener('loadeddata', captureImage);
            //         };
    
            //         var captureImage = function() {
            //             var canvas = document.createElement("canvas");
            //             canvas.width = video.videoWidth * scale;
            //             canvas.height = video.videoHeight * scale;
            //             canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
            //             var img = document.createElement("img");
            //             img.src = canvas.toDataURL("image/png");
            //             output.appendChild(img);
            //         };
    
            //         initialize();
            //     })();
            // }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .demo-popup-top {
        width: 100%;
        opacity: .8;
        height: 48px;
        line-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 375px;
    }
    .small-loading{
        height:30px;
        line-height: 30px;
    }
    .tab-content {
        height: 100vh;
        overflow: auto;
    }
    
    .mu-tabs {
        background: #fff;
    }
    
    .mu-tab-link {
        color: #999;
    }
    
    .mu-tab-active {
        color: hsl(0, 71%, 58%);
    }
    
    a:active {
        color: #4499EE;
        text-decoration: none;
        /*CSS下划线效果：无下划线*/
        border-bottom: 1px #0099CC dotted/*CSS加一个只有下边的框 边框为虚线 */
    }
    
    a:link {
        text-decoration: none;
    }
    
    
    /* 指正常的未被访问过的链接*/
    
    a:visited {
        text-decoration: none;
    }
    
    
    /*指已经访问过的链接*/
    
    a:hover {
        text-decoration: none;
    }
    
    
    /*指鼠标在链接*/
    
    a:active {
        text-decoration: none !important;
    }
    
    
    /* 指正在点的链接*/
    
    a {
        text-decoration: none !important;
    }
    
    .index-content-box .head .active {
        color: #ff4040;
    }
    
    .head-bannner {
        height: 4.4rem;
        width: 100%;
        position: relative;
    }
    
    .head-bannner .head-title {
        position: absolute;
        bottom: 0;
        height: 1.04rem;
        line-height: 1.04rem;
        width: 100%;
        /*padding: 0 0.346667rem;*/
        font-size: 0.453333rem;
    }
    
    .inform {
        padding: 0 0.346667rem;
        height: 1.04rem;
        line-height: 1.04rem;
        font-size: 0.453333rem;
        position: absolute;
        z-index: 1000;
        color: #fff;
    }
    
    .head-bannner .head-title .bg {
        opacity: 0.6;
        width: 100%;
        height: 100%;
        background: #000;
    }
    
    .head-bannner,
    .head-bannner img {
        height: 4.4rem;
        width: 100%;
    }
    
    .content {
        padding: 0.346667rem 0.453333rem;
        display: -webkit-box;
        /* mate8 支持 */
        display: -webkit-box;
        /* mate8 支持 */
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        color: #333;
        border-bottom: 1px solid #dddddd;
    }
    
    .content .left-box {
        flex: 1;
        width: 60%;
        word-wrap: break-word;
        /* white-space:nowrap; */
        text-align: left;
    }
    
    .content .title {
        height: 50px;
        overflow: hidden;
        width: 100%;
        font-size: 0.453333rem;
    }
    
    .content .right-box {
        width: 3.386667rem;
        height: 2.133333rem;
    }
    
    .personnumber-box {
        /* background:red; */
        color: #999;
        margin-top: 0.266667rem;
        letter-spacing: 1px;
    }
    
    .personnumber-box img {
        height: 0.4rem;
        width: 0.4rem;
        position: relative;
        top: 0.053333rem;
        left: 0.106667rem;
    }
    
    .content .right-box img {
        width: 3.386667rem;
        height: 2.133333rem;
    }
    
    .bigcontent {
        padding: 0.346667rem 0.453333rem;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        /*width:100%;*/
    }
    
    .bigcontent .title {
        color: #333;
        font-size: 0.453333rem;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-bottom: 0.266667rem;
    }
    
    .bigcontent .video-wrap {
        /* background:red; */
        height: 6.6rem;
        width: 100%;
    }
    
    .bigcontent #video {
        height: 6.6rem;
        width: 100%;
        height: 100%;
    }
</style>
