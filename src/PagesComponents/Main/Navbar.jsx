import React from 'react'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from '../Components/Logo';
import ShoppingCartCanvas from '../Components/MenusAndDropdowns/ShoppingCartCanvas';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


function Navbar({Active}) {
  const [IsFixed, setIsFixed]  = useState(false);

const checkWindowHeight = ()=>{ 
  document.addEventListener("scroll", (e) => { 
    setIsFixed(window.scrollY > 270 ? true: false);
  }); 
}



useEffect(()=> { 
  checkWindowHeight();
}, []);

  return (
    <div className='wo-navbar'>
     <div className="header">
    <div className="top bg-grey">
         <div><p >WELCOME TO M. F. MARTINS, S. A. online store  !</p></div>
         <div className="d-flex">
              <div className="lang">
                <li className="active"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/640px-Flag_of_Portugal.svg.png" alt=""/>
                   <ul className='d-none'>
                       <li className="flex"><img src="../images/flags/us.svg" alt=""/>English</li>
                       <li className="flex"><img src="../images/flags/fr.svg" alt=""/>France</li>
                       <li className="flex"><img src="../images/flags/pt.svg" alt=""/>Portuguese</li>
                       <li className="flex"><img src="../images/flags/ru.svg" alt=""/>Russian</li>
                    </ul>
                </li>
              </div>
              <div className="br"></div>
              <ul className="d-flex">
                  <li><Link to="/">M. F. MARTINS, S. A.</Link></li>
                  <li><Link to="/contact">contatos</Link></li>
                  <li><Link to="/useraccount">Minha conta</Link></li>
                  <li className="ac"> <li><Link to="/signup">Login</Link></li> / <li> <Link to="signup.html">Registrar</Link></li></li>
              </ul>
         </div>
    </div> 
    <nav className={IsFixed ? "fixed"  : ""}>
    <div className={"wks-navbar-classic"}>
        <div>
            <Logo />
        </div>
         <div className="links">
            <ul className="flex">
                <li className={Active === 1 ? "active" : ""}><Link to="/">Inicio</Link></li>
                <li className={Active === 2 ? "active" : ""} ><Link to="/products">Produtos</Link></li>
                <li className={Active === 3 ? "active" : ""} ><Link to="#">Ofertas</Link></li>
                <li className={Active === 4 ? "active" : ""} ><Link to="/">Equipamentos</Link></li>
                <li className={Active === 5 ? "active" : ""} ><a target='_blank'  href="#">Serviços</a></li>
                <li className={Active === 6 ? "active" : ""} ><Link to="/contacts">Contatos</Link></li> 
            </ul>
         </div>
       <div className="button-links">
           <Link to="#" className="btn bg-white text-dark">Minha conta cliente</Link> 
       </div> 
    </div>  
    <div className="wks-navbar"> 
        <div className="box box-content"> 
            <div className="departments-dropdwon">
               <CgMenuRightAlt />
                <span>Todas categorias</span>
                <ul className="d-none">
                    
                </ul>
            </div>
        </div>
        <div className="box col center">
            <div className="search-box col">
                <div className="form" action="/products" method="POST">
                    <select className="form-control" name="filter" id="categoryselector">
                      <option value="">Categorias</option>
                      <option value="1">Todas</option>
                      <option value="2">Equipamentos de carro</option> 
                      <option value="4">Transporte</option> 
                      <option value="5">Acessórios</option>  
                    </select> 
                    <input type="text" className="form-control" name="search" placeholder="pesquisar..."/>
                    <Link to="/products"><button type="submit"><SearchOutline/></button></Link>
                    <section className="form-autocomplete">
                   
                    </section>
                </div>
              </div>
        </div> 
       <div className="box">
         <div className="links">
            <li><Link to="#"><MdBalance /> <span>Comparar</span></Link></li>
            <li ><Link to="#"><HeartOutline/> <span>Lista de desejos</span></Link></li>
            <ShoppingCartCanvas />
         </div>
        <div className="custom-control custom-switch">
             <div className="d-none">
                <input type="checkbox" className="custom-control-input" id="changetheme"/>
                <label className="custom-control-label" for="changetheme"></label>
            </div> 
          </div>
       </div>
    </div> 
    </nav>
     </div>
    </div>
  )
}

export default Navbar