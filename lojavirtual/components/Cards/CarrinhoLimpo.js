import React, { Component } from 'react';
import Link from 'next/link';
import {cleanCarrinho} from '../../redux/actions/carrinhoActions';

class CardCarrinhoLimpo extends Component {

    componentDidMount(){
       cleanCarrinho();  
    }

    render(){
        return (
            <div className="itens-cabecalho flex-2 flex flex-center">
                <Link href="/carrinho">
                    <div className="item-cabecalho">
                        <i className="fa fa-user"></i>
                        <span>LIMPAR</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default CardCarrinhoLimpo;