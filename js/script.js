const{createApp}=Vue;
// import {contactsList} from './data.js';
createApp({
    data(){
        return{
            // export const 
            contactsList : [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            selectedContact: null ,
            // contacts:contactsList,
            searchContact:'',
            //activeContactIndex:0,
            lastID:8,
            frasi: [
                "La conoscenza è potere.",
                "ok",
                "ciaoone",
                "fantastico!",
                "perfetto",
                "neh",
                "grazie per la tua opinione(sarcasmo)",
                "Che cosa hanno in comune un televisore e una formica? Le antenne!",
                "Qual è la città preferita dai ragni? Mosca!",
                "Che cos'è una zebra? Un cavallo evaso dal carcere!",
                "Che cosa fa un chicco di caffè sotto la doccia? Si... Lavazza!",
              ],
            newMessage: '',
            activeContactId: null,
            

        }
    },
    created() {
        this.selectedContact = this.contactsList[0];
    },

    methods:{
       seleziona(contactId){
        console.log(contactId);
        this.selectedContact = this.contactsList.find(contact => contact.id === contactId);
        this.activeContactId = contactId;
        console.log(this.selectedContact)
       },
       sendMessage() {
        if (this.newMessage.trim() !== '') {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();
            this.lastID=this.lastID+1;
            const newMessage = {
                date: formattedDate,
                message: this.newMessage,
                id:this.lastID,
                status: 'sent',
                showDropdown:false,
            };

            console.log(this.lastID);
            this.selectedContact.messages.push(newMessage);
            this.newMessage = '';
            
            setTimeout(this.sendAutoReply, 1000);
        }
    },
    getRandomFrasi() {
        const randomIndex = Math.floor(Math.random() * this.frasi.length);
        return this.frasi[randomIndex];
      },
    sendAutoReply() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        const autoReply = {
            date: formattedDate,
            message: this.getRandomFrasi(),
            status: 'received',
            showDropdown:false,
        };
        this.selectedContact.messages.push(autoReply);
    },
    formatTime(dateTime) {
        const parts = dateTime.split(' '); 
        //console.log (parts)
        if (parts.length === 2) {
            const timePart = parts[1];
            const [hour, minute] = timePart.split(':');
            return `${hour}:${minute}`;
        }
        return 'Formato data non valido';
    },
    filterContacts() {
        const search = this.searchContact.toLowerCase();
        return this.contactsList.filter((contact) => {
            return contact.name.toLowerCase().includes(search);
        });
    },
    showdropdown(index){ 
        this.selectedContact.messages[index].showDropdown = !this.selectedContact.messages[index].showDropdown;
    },
    deleteMessage(message) {
        const index = this.selectedContact.messages.indexOf(message);
        this.selectedContact.messages.splice(index, 1);
      },
            
    },

    computed:{

    }
}).mount('#app');