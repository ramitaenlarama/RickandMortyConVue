let app = new Vue({
    el: '#app',
    data: {
        episodios: {},
        episodio: '',
        personajes: [],
    },
    methods: {
        mostrarPersonajes: function () {
            this.personajes = [];
            
            fetch(`https://rickandmortyapi.com/api/episode/${this.episodio}`)
                .then(response => response.json())
                .then(data => {
                    data.characters.forEach(urlpersonaje=>{
                        fetch(urlpersonaje)
                        .then(response => response.json())
                        .then(data => {
                            this.personajes.push(data)
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        fetch('https://rickandmortyapi.com/api/episode/')
            .then(response => response.json())
            .then(data => {
                this.episodios = data;
            })
            .catch(err => {
                console.log(err);
            });
    },
})