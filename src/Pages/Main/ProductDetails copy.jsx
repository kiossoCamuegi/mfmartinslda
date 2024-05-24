import React, { useState } from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import HomeProductsSlider from '../../PagesComponents/Main/HomeProductsSlider';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';
import Loader from '../../PagesComponents/Loader';
import Zoom from 'react-img-zoom'
import Slider from "react-slick";
import ImageLazyLoading from '../../PagesComponents/Components/ImageLazyLoading';
import Table from 'react-bootstrap/Table';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBasketCheck } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";


function ProductDetails() {
  document.title = "Nome do produto";
  const [ ActiveImage, setActiveImage ]  = useState(0) ;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <button className='btn'>#</button>,
    prevArrow: <button className='btn'>#</button>,
  };

  const Images = [
    {
      image: "https://lh3.googleusercontent.com/proxy/LnEAblqQPFZzNtMs7Y3s7Rik0ISJP7ZqnRrKEmO-NTiPrd7HxBkLARNy4EAGt8P8Sb4F1rmh7To_XszTlU0U59oTx-F2Ct9I5vtJLeKhNTbNEqnJmg",
      code:1,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2XOh_sxw93Fq1bhCMkx3yCQhrS4Bx0Rukg&s ",
      code:2,
    },
    {
      image: "https://contatech.es/wp-content/uploads/2019/10/ultrasonico-2-1.jpg ",
      code:3,
    },
    {
      image: "https://www.sedical.com/wp-content/uploads/2014/01/contadores-749.jpg ",
      code:4,
    },
    {
      image: "https://www.voltimum.es/sites/www.voltimum.es/files/styles/image_630/public/fields/main_image/contador_termico_0_0.jpg",
      code:5,
    },
    {
      image: "https://www.ecosist.net/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/a/c/ace6000jpg_1_.jpg",
      code:6,
    },
  ];

   

  return (
    <div>
      <Navbar Active={2} />
      <br />
      <section className="product-details-page">
        <div className="center d-none">
          <Loader />
        </div>
        <aside className="info-container">
          <section className="block-image">
            <main>
              <Zoom
                img={Images[ActiveImage].image}
                zoomScale={3}
                width={500}
                height={400}
              />
            </main>
            <div className="images-slides">
              <div className="slider-container">
                <Slider {...settings}>
                  {Images.map((item, index) => (
                    <article key={index} className={ActiveImage === index ? "active" : ""} 
                     onClick={()=>setActiveImage(index)} >
                      <div className="image">
                        <ImageLazyLoading source={item.image} />
                      </div>
                    </article>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
          <section className="block-info">
            <aside className='dets'>
              <div className="category text-light bg-main">material eletrico</div>
              <h1 className="product-title">Contadores de energia solar e equipamentos / Kit de manutenção</h1>
              <h2 className="price">$ 2.000,<span>00</span></h2>
              <h5>Descrição</h5>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis fugiat laudantium nobis
                accusamus totam distinctio,
                quod a magni ipsum sed dicta impedit perferendis nemo quidem officia rerum. Assumenda, nulla.
              </p>
              <Table striped responsive="sm">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
              <div className="block-info">
                <h5>Detalhes</h5>
                <ul>
                  <li className="flex"><HiOutlineLocationMarker />Disponivel em <strong>portugal</strong></li>
                  <li className='flex'><TbBasketCheck />Disponivel no stock <strong>sim</strong></li>
                </ul>
              </div>
            </aside>
          </section>
          <aside className="order-box">
            <div className="title-area">
              <h4>Detalhes da compra</h4>
            </div>
            <div className="details">
              <div className="space">
                <h6>Quantidade</h6>
                <div className="custom-input-number">
                   <button className='btn'>-</button>
                      <input type="number"  placeholder='1' value={1} className="form-control" />
                    <button className='btn'>+</button>
                </div>
              </div>
              <div className="space">
                <div><span>Marca</span></div>
                <div><strong>Desconhecida</strong></div>
              </div>
              <div className="space">
                <div><span>Preço</span></div>
                <div><strong>$65.00</strong></div>
              </div>
              <div className="space">
                <div><span>Modelo</span></div>
                <div><strong>4904984</strong></div>
              </div>
              <div className="space">
                <div><span>Potência</span></div>
                <div>
                  <select name="" id="" className="form-control"> 
                  <option value="" selected>escolha uma opção</option>
                  </select>
                </div>
              </div>
              <div className="space">
                <div><span>Capacidade do depósito</span></div>
                <div>
                  <select name="" id="" className="form-control"> 
                  <option value="" selected>escolha uma opção</option>
                  </select>
                </div>
              </div>
              <div className="space">
                <div><span>Pressão</span></div>
                <div>
                  <select name="" id="" className="form-control"> 
                  <option value="" selected>escolha uma opção</option>
                  </select>
                </div>
              </div>
              <div className="form-area">
                <textarea name="" id="" className="form-control"></textarea>
              </div>
            </div>
            <div className="total-area">
              <h6>Sub total : <strong>35.000$</strong></h6>
            </div>
            <div className="details">
              <div className="block">
                <button className="btn bg-main text-light">Comprar Agora</button>
                <button className="add-to-cart btn text-main"> <RiShoppingCartLine /> Adicionar no carrinho</button>
              </div>
            </div>
          </aside>
        </aside>
      </section>
      <br />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProductDetails