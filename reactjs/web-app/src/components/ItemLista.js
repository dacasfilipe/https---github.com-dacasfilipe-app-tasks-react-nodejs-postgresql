import "./css/ItemLista.css";

const ItemLista = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.titulo}</td>
            <td>{props.autor}</td>
            <td>{props.ano}</td>
            <td class="text-end">
                {Number(props.preco).toLocaleString("pt-br", {minimumFractionDigits:2})}
            </td>
            <td class="text-center">
                <img src={props.foto} alt="capa do livro" width="75px"/>
            </td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir">&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar">&#36;</i>
            </td>
        </tr>
    );
};

export default ItemLista;