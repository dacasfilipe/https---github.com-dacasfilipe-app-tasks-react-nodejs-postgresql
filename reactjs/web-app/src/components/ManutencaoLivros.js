import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";  

const ManutencaoLivros = () => {
    const {register, handleSubmit, reset} = useForm();
    const [livros, setLivros] = useState([]);

    const obterLista = async () => {
        try{
            const lista = await inAxios.get("livros");
            setLivros(lista.data);
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }


//define o método que será executado assim que o componente for renderizado
useEffect(() => {
    obterLista();
},[]);

const filtrarLista = async (campos) => {
    try{
        const lista = await inAxios.get(`livros/filtro/${campos.palavra}`);
        lista.data.length
        ? setLivros(lista.data)
        : alert("Não há livros cadastrados com a palavra chave pesquisada");
    }catch(error){
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    }
    

}

const excluir = async(id,titulo) => {
    if(!window.confirm(`Confirma a exclusão do livro ${titulo}?`)){
        return;
    }
    try{
        await inAxios.delete(`livros/${id}`);
        setLivros(livros.filter(livro => livro.id !== id));
        
    }catch(error){
        alert(`Erro: ..Não foi possível excluir o livro ${titulo}: ${error}`);
    }
}

//alterar os registros
const alterar = async (id,titulo,index) => {
    const novoPreco = Number(prompt(`Digite o novo preço do livro ${titulo}`));
    if (isNaN(novoPreco)){
        return;
    }
    try{
        await inAxios.put(`livros/${id}`,{preco: novoPreco});
        const livrosAtualizados = [...livros];
        livrosAtualizados[index].preco = novoPreco;
        setLivros(livrosAtualizados);
    }catch(error){
        alert(`Erro: ..Não foi possível alterar o livro ${titulo}: ${error}`);
    }

}
    return (
       <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <h4 className="fst-italic mt-3">Manutenção</h4>
            </div>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Titulo ou Autor" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                    </div>
                </form>
            </div>
        </div>

        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Ano</th>
                    <th>Preço</th>
                    <th>Foto</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {livros.map((livro) => (
                    <ItemLista
                        key={livro.id}
                        id={livro.id}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        ano={livro.ano}
                        preco={livro.preco}
                        foto={livro.foto}
                        excluirClick={()=>excluir(livro.id,livro.titulo)}
                        alterarClick={()=>alterar(livro.id,livro.titulo)}
                    />
                ))}
            </tbody>
        </table>

       </div> 
    );
};

export default ManutencaoLivros;