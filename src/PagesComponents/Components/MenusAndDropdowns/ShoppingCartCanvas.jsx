import React from 'react'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbBasketMinus } from "react-icons/tb";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProductCartComponent from '../ProductComponents/ProductCartComponent';
import { Link } from 'react-router-dom';
import { IoInformationCircle } from "react-icons/io5";


function ShoppingCartCanvas(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Data  =  [
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

    const GetShoppingCartItems  = ()=>{
        try {
            
        } catch (error) {
            
        }
    }
  

  return (
    <>
      <div onClick={handleShow} >
         <li className="cartdrop">
            <Link to="#"><TbBasketMinus /><span>Meu carrinho</span></Link><div className="count">+10</div>
        </li>
      </div>
      <Offcanvas show={show} onHide={handleClose}  placement={"end"} name={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className="cart-canvas">
                <ul>
                    {Data.map((item, index)=>(
                         <ProductCartComponent data={item} key={index} />
                    ))}
                </ul>
                <div className="shop-details">
                    <Form>
                        <Form.Control placeholder='Código promocional...' />
                        <button className="btn">Aplicar</button>
                    </Form>
                    <small>30% de desconto</small>
                    <div className="math-area">
                         <div className="space">
                             <div><h4>Subtotal</h4></div>
                             <div><h4>€564.20</h4></div>
                         </div>
                         <div className="space">
                             <div><h5>Disconto</h5></div>
                             <div><h5>(20%) -€1129.20</h5></div>
                         </div>
                         <div className="space">
                             <div><h5>Taxa <IoInformationCircle /></h5></div>
                             <div><h5>+ €225.86</h5></div>
                         </div>
                    </div>
                    <div className="mt-2 mb-2">
                       <div className="space">
                             <div><h4>Total</h4></div>
                             <div><h4 className='text-success'>€564.20</h4></div>
                         </div>
                    </div>
                     <Link to="#"><button className="btn col bg-black text-light">Confirmar pagamento</button></Link>
                     <Link to="#"><button className="btn col mt-2">Continuar a comprar</button></Link>
                </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ShoppingCartCanvas