import React, { useState } from 'react'
import ProductCard from './ProductComponents/ProductCard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function SearchComponents() {
    const [ActiveCategorie, SetActiveCategorie] = useState(null)

    // [ ] 

    const CategoriesTypes = [
        {
            name: "Medidores",
            code: 12,
        },
        {
            name: "Equipamentos",
            code: 13,
        },
        {
            name: "Transporte",
            code: 14,
        },
        {
            name: "Acessorios",
            code: 15,
        },
        {
            name: "Suplementares",
            code: 16,
        },
        {
            name: "Filtros",
            code: 17,
        },
        {
            name: "Reservatorios",
            code: 18,
        },

    ];


    const Products1 = [
        {
            id: 78,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://assisdrive.com/wp-content/uploads/2019/02/it_stainless-1.jpg",
        },
        {
            id: 83,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://assisdrive.com/wp-content/uploads/2022/05/foto-1.png",
        },
        {
            id: 93,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://assisdrive.com/wp-content/uploads/2019/02/ew100_6.jpg",
        },

        {
            id: 1,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.aabtools.com/wp-content/uploads/FLUKE_MDA-510-2-1.jpg",
        },
        {
            id: 2,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://dam-assets.fluke.com/s3fs-public/F-mda-550-series%203_02b_w.jpg",
        },

        {
            id: 3,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://static.wixstatic.com/media/e09521_0390cb123f1d4adcaf82b2e96a7ae0c9~mv2.jpg/v1/fill/w_980,h_763,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e09521_0390cb123f1d4adcaf82b2e96a7ae0c9~mv2.jpg",
        },
        {
            id: 4,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.autopartslogistic.com/blog/wp-content/uploads/2021/10/car-radiator-1900px-1024x693.jpg",
        },
        {
            id: 5,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.tecfil.com.br/wp-content/uploads/2022/01/IMAGEM-5_-RADIADOR-DO-CARRO.jpg",
        },
        {
            id: 6,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://cdn.shopk.it/usercontent/factord/media/images/7698680-144441-loja-eletricidade-comprar-online-factor-d-finder-7e568400000-5a-3x230.jpg",
        },
        {
            id: 7,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.legrand.pt/images/paginas/Prote%C3%A7%C3%A3o/55.2.jpg",
        },
        {
            id: 178,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.e-redes.pt/sites/eredes/files/styles/e_redes_564_352/public/Contadores_Inteligentes.png?h=10262229&itok=OX1oLAIO",
        },
        {
            id: 8,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://luxpro.pt/wp-content/uploads/2020/03/CTRIASLO.png",
        },
        {
            id: 98,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.sedical.com/wp-content/uploads/2014/02/contadores-440-5311.jpg ",
        },
    ];
    return (
        <div>
            <div className="search">
                <div className="filters">
                    <div className="top-filter"><Link to="/" className='text-main'><span>Inicio</span></Link> / produtos</div>
                    <form action="" id="filtersearch">
                        <div className="space">
                            <h4 >Filtros</h4>
                            <div><span className="clearallsearch">Limpar tudo</span></div>
                        </div>
                        <div className="search-tag">
                            <div className="text"> medidor de energia</div>
                            <span className="fa fa-close"></span>
                        </div>
                        <hr />
                        <h5 className="title">Marcas</h5>
                        <ul>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Equipamentos</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Materias de carro</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Linhas de trem</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Aparalehos eletronicos </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Ligas</label>
                            </div> 
                        </ul>
                        <hr />
                        <h5 className="title">Preços</h5>
                        <ul>
                            {[1, 345, 56, 7788, 8, 7, 8, 99, 9, 8].map((item, index) => (
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                    <label className="custom-control-label ml-2" for=""> € {Math.floor(item * 1)}.00</label>
                                </div>
                            ))

                            }

                        </ul>
                        <hr />
                    </form>
                </div>
                <div className="pdl"></div>
                <div className="products-container">
                    <div className="space">
                        <div> <h3 className='bold'>Produtos</h3></div>
                        <div className="flex">
                            <span>190.009 items</span>
                            <div className="filter-selector ml-2">
                                <select name="" className="form-control" id="">
                                    <option value="0">DCBM 400 & 600</option>
                                    <option value="0">Mangas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-2">
                        <div className="search-by-types">
                            {CategoriesTypes.map((item, index) => (
                                <Dropdown key={index}>
                                    <Dropdown.Toggle className={ActiveCategorie === item.code ? "btn mt-2 active" : "btn mt-2"} id="dropdown-basic">{item.name}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <div onClick={() => SetActiveCategorie(item.code)}>
                                            <Dropdown.Item href="#/action-1">#####</Dropdown.Item>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ))}
                        </div>
                    </div>
                    <div className="products-content">
                        {Products1.map((item, index) => (
                            <ProductCard data={item} key={index} />
                        ))}
                    </div>


                    <div className="product-loader">
                        <button className="load-more-products">Carregar mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchComponents