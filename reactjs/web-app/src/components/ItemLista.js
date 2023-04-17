import "./css/ItemLista.css";
//const ItemLista = (props) => { 
//nocódigo abaixo fiz a desestruturação de props
const ItemLista = ({id,titulo,autor,ano,preco,foto,excluirClick,alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{ano}</td>
            <td class="text-end">
                {Number(preco).toLocaleString("pt-br", {minimumFractionDigits:2})}
            </td>
            <td class="text-center">
                <img src={foto} alt="capa do livro" width="75px"/>
            </td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemLista;