<template>

    <div class="menu">
        <a v-for="KK in menu" :key="KK">{{ KK }}</a>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <div>
        원룸샵
        <h4>{{ products[0] }}</h4>
        <p>만원</p>
        <button @click="increase">허위매물신고</button>
        <span>신고 수 : {{ siNum }}</span>
    </div>
    <div>
        <h4>{{ products[1] }}</h4>
        <p>만원</p>
    </div>
    <div>
        <h4>{{ products[2] }}</h4>
        <p>만원</p>
    </div>
</template>

<script>


export default {
    name: 'App',
    data(){
        return{
            products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
            menu : ['Home', 'Shop', 'About'],
            siNum : 0,
        }
    },

    methods :{
        increase() {
            this.siNum++;
        }
    },

    components: {
    
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.menu{
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}

.menu a {
    color: white;
    padding: 10px;
}
</style>
