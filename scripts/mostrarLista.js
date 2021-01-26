lista.component("lista-propositos", {
    props:['hechoProp','textoProp'],
      template: /*html*/` 
          <h1>{{titulo}}</h1>
          <ul>
            <li>{{hecho}} {{texto}}</li>
          </ul>
        `,
        data(){
          return{
            titulo: "Propositos año nuevo"
          };
        }
  });