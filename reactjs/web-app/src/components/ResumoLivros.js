import {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';
import {inAxios} from "../config_axios";


const ResumoLivros = () => {
  const [resumo, setResumo] = useState([]);
  const [grafico, setGrafico] = useState([]);
   
    // Define o método que será executado assim que o componente for renderizado
  useEffect(() => {
    const obterDados = async () => {
      try {
        const dadosResumo = await inAxios.get("livros/dados/resumo");
        setResumo(dadosResumo.data);

        const dadosGrafico = await inAxios.get("livros/dados/grafico");
        const arrayGrafico = [["Ano", "R$ Total"]];
        dadosGrafico.data.forEach((dado) => {
            arrayGrafico.push([dado.ano, parseInt(dado.total)]);
        });
        setGrafico(arrayGrafico);
        } catch (error) {
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
      }
    };

    obterDados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return(
    <div className="container">
        <h4 className="mt-3">Resumo</h4>
        <span className="btn btn-outline-primary btn-lg">
            <p className="badge bg-danger">{resumo.num}</p>
            <p>N de livros cadastrados</p>
        </span>
        <span className="btn btn-outline-primary btn-lg mx-2">
            <p className="badge bg-danger">
                {Number(resumo.soma).toLocaleString("pt-br",{minimumFractionDigits : 2})}
            </p>
            <p>Total investido em livros</p>
        </span>
        <span className="btn btn-outline-primary btn-lg me-2">
            <p className="badge bg-danger">
                {Number(resumo.maior).toLocaleString("pt-br",{minimumFractionDigits : 2})}
            </p>
            <p>Maior preço cadastrado</p>
        </span>
        <span className="btn btn-outline-primary btn-lg">
            <p className="badge bg-danger">
                {Number(resumo.media).toLocaleString("pt-br",{minimumFractionDigits : 2})}
            </p>
            <p>Preço médio dos livros</p>
        </span>

        <div className="d-flex justify-content-center">
            <Chart 
                width={'1000px'}
                height={'420px'}
                chartType="ColumnChart"
                loader={<div>Carregando Gráfico...</div>}
                data={grafico}
                options={{
                    title: 'Total de Investimento em Livros - por Ano de Publicação',
                    chartArea: {width: '80%'},
                    hAxis: {
                        title: 'Ano de Publicação',
                        format: '####', // Formato personalizado para o eixo X
                      },
                    vAxis: {title: 'Preço Acumulado R$'}, 
                    legend: {position: 'none'},              
                    }
                }
            />
        </div>
    </div>
);
};//fim da função ResumoLivros
export default ResumoLivros;