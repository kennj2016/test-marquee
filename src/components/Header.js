import React, {Component} from 'react';
import logo from '../assets/abc_logo.svg'
const Header = ({setPage,pages,currentPage})=>{
    return  (
        <header>
            <div className="container">

                <div className="row">
                    <div className="col-4">
                        <img className="logo" src={logo} alt=""/>

                        <ul className="menu">
                            {pages.map(page=>{
                                return (  <li onClick={e=>setPage(page.slug)} className={(page.slug == currentPage.slug) ? 'active' : ''}>{page.title}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-8">
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header