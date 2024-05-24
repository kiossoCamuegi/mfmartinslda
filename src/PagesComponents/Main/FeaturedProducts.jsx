import React from 'react'
import ProductCard from '../Components/ProductComponents/ProductCard';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function FeaturedProducts() {

    const Products1 = [
        {
            id:1,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.aabtools.com/wp-content/uploads/FLUKE_MDA-510-2-1.jpg",
        },
        {
            id:2,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://dam-assets.fluke.com/s3fs-public/F-mda-550-series%203_02b_w.jpg",
        },
        {
            id:3,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://static.wixstatic.com/media/e09521_0390cb123f1d4adcaf82b2e96a7ae0c9~mv2.jpg/v1/fill/w_980,h_763,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e09521_0390cb123f1d4adcaf82b2e96a7ae0c9~mv2.jpg",
        },
        {
            id:4,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://www.autopartslogistic.com/blog/wp-content/uploads/2021/10/car-radiator-1900px-1024x693.jpg",
        },
        {
            id:5,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://www.tecfil.com.br/wp-content/uploads/2022/01/IMAGEM-5_-RADIADOR-DO-CARRO.jpg",
        },
        {
            id:6,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://cdn.shopk.it/usercontent/factord/media/images/7698680-144441-loja-eletricidade-comprar-online-factor-d-finder-7e568400000-5a-3x230.jpg",
        },
        {
            id:7,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://www.legrand.pt/images/paginas/Prote%C3%A7%C3%A3o/55.2.jpg",
        },
        {
            id:178,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://www.e-redes.pt/sites/eredes/files/styles/e_redes_564_352/public/Contadores_Inteligentes.png?h=10262229&itok=OX1oLAIO",
        },
        {
            id:8,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://luxpro.pt/wp-content/uploads/2020/03/CTRIASLO.png",
        },
        {
            id:98,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://www.sedical.com/wp-content/uploads/2014/02/contadores-440-5311.jpg ",
        },
    ];

    const Products2 = [
        {
            id:78,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://assisdrive.com/wp-content/uploads/2019/02/it_stainless-1.jpg",
        },
        {
            id:83,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://assisdrive.com/wp-content/uploads/2022/05/foto-1.png",
        },
        {
            id:93,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://assisdrive.com/wp-content/uploads/2019/02/ew100_6.jpg",
        },
        {
            id:983,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://zeben.pt/sites/_zeben3/public/APATOR/INVONIC2/INVONIC-2-02.jpg",
        },
        {
            id:98,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://mirror.mixtronica.com/67101-superlarge_default/ut125c-multimetro-mini-digital.jpg",
        },
        {
            id:44,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8da43a35b58ec039d4600c28ba2be975.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        },
        {
            id:11,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://wanger.com.br/web/image/product.template/8761/image",
        },
        {
            id:11,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://i.ebayimg.com/thumbs/images/g/aEYAAOSwxelfMz7K/s-l640.jpg",
        },
        {
            id:121,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnFEyE6ONBaP9WX3216UcLCGTrqcjKF3_Og&s ",
        },
        {
            id:11,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxN4Wr2Qe515EhrjEE4HYoP_azDSJUQFm8QA&s",
        },
        {
            id:927,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://luxpro.pt/wp-content/uploads/2020/03/CTRIASLO.png",
        },
        {
            id:172,
            name: "Nome do produto aqui",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DzrN9P9cAJqu0zeRgvzn68VsM5-g51otlw&s ",
        }, 
    ];

    return (
        <div>
            <aside className="featured-products">
                <h1 className="title">Produtos em destaque</h1>
                <div className="products-container">
                    <div className="products-custom">
                        <div className="products-content">

                            {Products1.map((item, index) => (
                                <ProductCard data={item} key={index} />
                            ))}
                        </div>
                        <div className="block announce-block">
                            <section className="announce">
                                <a href="#"><ImageLazyLoading source="https://images5.alphacoders.com/541/541405.jpg" alt="#" /></a>
                            </section>
                            <section className="announce-extra">
                                <a href="#"><ImageLazyLoading source="https://e1.pxfuel.com/desktop-wallpaper/676/782/desktop-wallpaper-jenny-jenny-electric-air-compressor-for-sale-in-arthur-il-power-plus-equipment-llc-arthur-il.jpg" alt="#" /></a>
                            </section> 
                        </div>
                    </div>
                </div>
                <div className="post-banner">
                    <div className="item">
                       <Link> 
                         <ImageLazyLoading source="https://static.vecteezy.com/system/resources/previews/029/563/030/non_2x/a-machine-tool-and-other-machines-sitting-on-a-black-background-free-photo.jpg" />
                      </Link>
                    </div>
                </div>
                <br/>
                <div className="products-content">
                    {Products2.map((item, index) => (
                        <ProductCard data={item} key={index} />
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default FeaturedProducts