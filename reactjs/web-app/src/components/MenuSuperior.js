import {Link} from "react-router-dom";

const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark stick-top">
            <div className="container">
                <Link to="/" className="navbar-brand" >Controle Pessoal de Livros</Link>
                <ul className="navbar-nav">
                    <li>
                        <Link to="/" className="nav-link">Inclusão</Link>
                    </li>
                    <li>
                        <Link to="/lista" className="nav-link">Manutenção</Link>
                    </li>
                    <li>
                        <Link to="/resumo" className="nav-link">Resumo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuSuperior;