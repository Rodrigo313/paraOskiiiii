const lista = Vue.createApp({
    data() {
        return {
            titulo: "Propósitos de año nuevo",
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, {
                texto: "Comer mas sano",
                hecho: false
            }, {
                texto: "Viajar mas",
                hecho: true
            }]
        };
    },
    methods:{
        borrar(index, num){
            this.propositos.splice(index,num);
        },
        anadir(){
            this.propositos.push({texto:this.nuevoProp, hecho:false})
        },
        borrarTodos(){
            for (let i = 0; i <= this.propositos.length; i++) {
                this.propositos.splice(i);
                
            }
        }
    }
})