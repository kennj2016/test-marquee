import React, {Component} from 'react';
import Header from '../components/Header'

const LayoutMaster =  (props)=>{
    let {currentPage,children} = props
    let backgroundImage =`url( '/backgrounds/${currentPage.blocks[0].background}'`;
    return (
        <main className='main-layout' style={{backgroundImage}}>
            <Header {...props} />
            {children}
        </main>
    )
}

export default LayoutMaster