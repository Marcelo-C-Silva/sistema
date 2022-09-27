
function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML=lista_tarefas.length;
}

function listarTarefas(){
    let conteudo = buscar().sort().map(function(tarefas){
        return`
        <div>
        <input type ="checkbox">
        ${tarefas.titulo}

        <span class = "badge ${tarefas.prioridade === 'Baixa' && 'bg-primary'}  ${tarefas.prioridade === 'Media' && 'bg-warning'}  ${tarefas.prioridade === 'Alta' && 'bg-danger'}">
        ${tarefas.prioridade}
        </span>
        </div>
    `;
    })
    document.getElementById('tarefas').innerHTML=conteudo.join("");

};

function addTarefa(){
    event.preventDefault();
    let titulo = document.getElementById("input_nova_tarefa").value;
    
    
    if(titulo.trim() === ""){
        alert("tarefa invalida");
        return;
    }
    if(true === lista_tarefas.includes(titulo)){
        alert("Tarefa já existe");
        return;
    }

 

    salvar(titulo, input_prioridade.value);

    document.getElementById("input_nova_tarefa").value="";
   
   
    atualizarQuantidade();
    listarTarefas();
}

listarTarefas();
