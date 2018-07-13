<template>
	<div id="app">
		 <navigation>
      <router-view></router-view>
     </navigation>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
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
	.mu-popup {
		background-color: hsl(0, 0%, 28%);
		color: #fff;
	}
	.emitdata {
		width: 200px;
		text-align: center;
		position: absolute;
		top: 50%;
		right: 50%;
		margin-right: -100px;
	}
	#content img{ 
		height: 4.666667rem;
		width: 100%;
		margin-top: 0.533333rem;
	}	#content{

		letter-spacing: 2px;
		/* margin-top: 0.533333rem; */
		font-size: 0.426667rem;
	}
	p { word-wrap:break-word; }
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
	}
	
	.content-box {
		padding: 0.4rem;
		overflow-y: auto;
		text-align: left;
	}
	
	.title {
		/* margin:0.4rem 0; */
		/* height:0.533333rem; */
		line-height: 0.663333rem;
		font-size: 0.453333rem;
	}
	
	.date {
		font-size: 0.32rem;
		/* height:0.32rem; */
		line-height: 1.10rem;
		line-height: 1.10rem;
		/* margin:0.266667rem 0; */
		color: #d9d9d9;
		position: relative;
	}
	
	#back {
		position: absolute;
		top: 0.01rem;
		right: 0.133333rem;
		font-size: 0.426667rem;
		color: hsl(240, 6%, 79%);
	}
	
	.banner {
		background: #d9d9d9;
		height: 4.666667rem;
	}
	
	.banner img {
		height: 4.666667rem;
		width: 100%;
	}
	
	.banner video {
		height: 4.666667rem;
		width: 100%;
	}
	
	embed {
		height: 4.666667rem;
		width: 100%;
	}
	
	.content {
		color: #222;
	}
	
	main p {
		letter-spacing: 2px;
		margin-top: 0.533333rem;
		font-size: 0.426667rem;
	}
	
	footer div {
		height: 0.32rem;
		line-height: 0.32rem;
		font-size: 0.32rem;
		margin: 0.533333rem 0;
		letter-spacing: 2px;
		color: #d9d9d9;
	}
	
	footer div img {
		height: 0.32rem;
		width: 0.32rem;
		position: relative;
		left: 0.026667rem;
		top: 0.026667rem;
	}
	
	img[src=""],
	img:not([src]) {
		opacity: 0;
	}
</style>

<script>
	export default {
		//    watch:{
	
		//     $route(to, from) {
		//                 // console.log(1111111)
		//                 let scrollContent = document.querySelector('.content-box');
		//                 //  console.log( scrollContent.scrollTop)
		//                 if (scrollContent){
		//                   console.log('re')
		//                     scrollContent.scrollTop = 0;
		//                     scrollContent.scrollLeft = 0;
		//                 }else{
		//                   //  document.documentElement.scrollTop =
		//                 }
		//             }
		// }
	}
</script>