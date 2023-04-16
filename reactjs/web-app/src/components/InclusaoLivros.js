const InclusaoLivros = () => {
    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão </h4>
            <form>
                <div className="form-group">
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" className="form-control" id="titulo" required autofocus/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" className="form-control" id="autor" required/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URL da foto:</label>
                    <input type="url" className="form-control" id="foto" required/>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação:</label>
                            <input type="number" className="form-control" id="ano" required/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="preco">Preço R$:</label>
                            <input type="number" className="form-control" id="preco" step="0.01" required/>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar"/>
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"/>
            </form>
            <div className="alert"></div>
        </div>
    );
};

export default InclusaoLivros;