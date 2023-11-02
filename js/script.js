const{createApp}=Vue;
import {contactsList} from './data.js';
createApp({
    data(){
        return{
            contacts:contactsList,

        }
    },
    methods:{

    },
    computed:{

    }
}).mount('#app');