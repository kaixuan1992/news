<template>
	<div class="content-box" v-show="isdetail">
	
		<div>
			<!-- <div class="title">{{newsTitle.length > 30 ? newsTitle.substring(0,30):newsTitle}}
				<span>{{newsTitle.length > 30 ?'...':''}}</span>
			</div> -->
			<div class="title">{{newsTitle }}
				<!-- <div id="back">返回</div> -->
			</div>
			<div class="date">{{createTime}}
					<div id="back" @click="back">返回</div>
			</div>
		</div>
		<div class="banner" v-if="imgshow">
				<img :src="homeImage">
		</div>
		<!-- <div  class="banner" v-else>
				<video id="video" :src="mediaUrl"></video>
		</div> -->
		<main class="content" id="content" >
			<!-- <div id="content">

			</div> -->
			<!-- {{datailcontent}}333 -->
		</main>
		<footer class="font14">
			<!-- <div>阅读100000+
				<div id="clickGood" @click="addStars"> <span  v-if="!isadd">&nbsp&nbsp
										<img src="../assets/admire-empty.png"> {{stars}}</span>
										<span v-else>&nbsp&nbsp<img src="../assets/admire.png"> {{stars}}</span>
				</div>
	
			</div> -->
		</footer>
	</div>
</template>

<script>
	
</script>

<style>
	
</style>

<script>
import { Indicator } from 'mint-ui';
import moment from "moment"
	export default {
		data() {
			return {
				scrolldistance: 0,
				datailcontent: '',
				newsTitle: '',
				mediaUrl: '',
				homeImage: '',
				createTime: '',
				stars: '',
				isadd:false,
				addnumber :0,
				imgshow:true,
				isdetail:false
			}
		},
		created() {
			// this.getdetail(this.params)
			// console.log(this.$route.params)
			this.scrolldistance = document.documentElement.scrollTop || document.body.scrollTop;
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
	
		mounted() {
			this.params = this.$route
			// console.log(this.params ,"this.params ")
			this.$nextTick(() => {
				this.getdetail(this.params.query.id)
			})
		},
		methods: {
			getdetail(data) {
							// $('.content').html('34343')
				Indicator.open('Loading...');
				let val = parseInt(data)
				let self = this
				$.ajax({
					type: "get",
					url: baseUrl + "/news/getNews",
					contentType: "application/json;charset=utf-8;",
					data: {
						newsId: val,
					},
					success: function(res) {
						// debugger
						// let res = JSON.parse(data)
						if (res.code == 1) {
								self.homeImage = res.data.homeImage
							// if (res.data.catId == 1) {
							// 	self.imgshow = true
							// 	self.homeImage = res.data.homeImage
							// } else {
							// 	self.imgshow = false
							// 	self.mediaUrl = res.data.mediaUrl
							// }
							Indicator.close();
							self.isdetail=true
							let date = new Date(res.data.createDate)
							self.createTime = moment(res.data.createDate).format('YYYY-MM-DD HH:mm:ss')
							self.newsTitle = res.data.newsTitle
							self.stars = res.data.stars
	
							// console.log(this.createDate)
							console.log($('#content1'),"res.data.newsHtml")
							$('#content').html('34343')
							$('#content').html(res.data.newsHtml)
							// console.log(res.data.newsHtml, "res.data")
							// res.data.forEach((item)=>{
							//     self.dataItem  = item.data;
							//     console.log(self.dataItem,"self.dataItem")
							//      console.log(item)
							//     if(item.headFlag){
							//         self.topitem = item
							//     }
							// })
							//    console.log("huo")
						}
					},
					error: function(error) {
						console("error=" + error);
					}
				});
			},
			addStars() {
				if(this.addnumber ){return}
				this.stars ++
				this.isadd = true
			  ++this.addnumber 
				$.ajax({
					type: "get",
					url: baseUrl + "/news/starNews",
					contentType: "application/json;charset=utf-8;",
					data: {
						newsId: this.params
					},
					dataType: "json",
					success: function(res) {
						if (res.code == 1) {
							console.log("huo")
						}
					},
					error: function(error) {
						console("error=" + error);
					}
				});
	
			},
			back() {
				console.log(2222)
				this.$router.back()
				document.body.scrollTop = this.scrolldistance
				document.documentElement.scrollTop = this.scrolldistance
			}
		}
	}
</script>

<style>
	#clickGood {
		display: inline-block;
		/* background:red; */
		height: 40px;
		line-height: 40px;
	}
</style>