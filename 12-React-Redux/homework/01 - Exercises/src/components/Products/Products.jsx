import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card.jsx'

function Products({list}) {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>

        <div className="productsList">
          {/* ¡Renderiza aquí todas tus cards! */
            list.map((e, i) => (<Card key={i} name={e.name} price={e.price} id={e.id}/>))
          }
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, null)(Products);
