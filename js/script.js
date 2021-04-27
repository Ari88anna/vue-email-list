var app = new Vue({
    el: '#root',
    data: {                 
      mailList: '',   
         
    },
    methods: {

        
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response)
                const result = response.data;
                console.log(result)
                this.mailList = result.response   
               
                

                
            });
    }
  })