import logo from '../../images/logo192.png';
import graph from '../../images/Grafico-pizza-setores.png';
import './Dashboard.css'
function Dashboard() {
    return (
        <>
            <div className="container text-center container-dash">
                <div className="row">
                    <div className="col">
                        <div className="card custom_card" >
                            <div className="card-body body-graph">
                                <h5 className="card-title">Análise</h5>
                                <img src={graph} className="graph card-img-top" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card custom_card" >
                            <div className="card-body">
                                <h5 className="card-title">Ganhos vs Percas</h5>
                                <div className="card" >
                                    <div className="card-body body-success">
                                        <h5 className="card-title">$100</h5>

                                    </div>
                                </div>
                                <br></br>
                                <div className="card" >
                                    <div className="card-body body-loss">
                                        <h5 className="card-title">$25</h5>

                                    </div>
                                </div>
                                <br></br><br></br><br></br>
                                <p>
                                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
                                    quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
                                    Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
                                    Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <br></br>
                <div className="row">

                    <div className="col">
                        <div className="card " >
                            <div className="card-body">
                                <h5 className="card-title">Trades</h5>
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">Diário</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colSpan={2}>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br></br>
                                        <form>
                                            <div className="row">
                                                <div className="col mb-3">
                                                    <label className="form-label">Entrada address</label>
                                                    <input type="Entrada" className="form-control" id="exampleInputEntrada1" aria-describedby="EntradaHelp" />
                                                    <div id="EntradaHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div className="col mb-3">
                                                    <label className="form-label">Loss</label>
                                                    <input type="Loss" className="form-control" id="exampleInputLoss1" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <br></br>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;