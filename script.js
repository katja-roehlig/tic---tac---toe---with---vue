const { createApp } = Vue;
Vue.createApp({
    data(){return{
        winner: false,
        a:"",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g:"",
        h:"",
        i:"",

    }},
computed:{
        compareAreas(){
            if(this.a !== "" && this.a === this.b && this.a === this.c ||
           this.d !== "" && this.d === this.e && this.d === this.f ||
           this.g !== "" && this.g === this.h && this.g === this.i ||
           this.a !== "" && this.a === this.e && this.a === this.i ||
           this.c !== "" && this.c === this.e && this.c === this.g
           
           ){
           return this.winner = true;
           };
    }
    
    }
}).mount("#app");