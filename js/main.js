const app = Vue.createApp({
    data(){
        return{
            title: "Contador App - Vue",
            count: 0,
        };
    },
    methods:{
        /* discount(){
            this.count--;
        },
        addcount(){
            this.count++;
        }, */
        /* modcount(instruction = "add"){
            if(instruction === "dis")
                this.count--;
            else
                this.count++;
        }, */
        modcount(instruction = "add", limit = 1){
            if(instruction === "dis")
                this.count -= limit;
            else
                this.count += limit;
        },
    },
});