const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark stick-top">
            <div className="container">
                <a className="navbar-brand" href="#">Controle Pessoal de Livros</a>
                <ul className="navbar-nav">
                    <li>
                        <a className="nav-link" href="#">Inclusão</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Manutenção</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Resumo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuSuperior;