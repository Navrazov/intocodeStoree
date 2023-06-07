import React from "react";
// import { Card } from 'antd';
import Product from "../products";
import './style.modules/cards.style.css'

// const { Meta } = Card;

// const Cards = () => {
// return <Card
// hoverable
// style={{ width: 240 }}
// cover={<img alt="example" src="https://intocode.ru/d/react-project-1/images/1.jpg" />}
// >
// <Meta title="97000 ₽" description="MacBook" />
// </Card>

// }

const Cards = () => {
  return (
    <div className="cardBlock">
      <div className="card">
        <Product
          name="Macbook"
          price="97000 ₽"
          discount='100000 ₽'  
          imgSrc="https://intocode.ru/d/react-project-1/images/1.jpg"
        />{" "}
        <button>Купить </button>{" "}
      </div>
      <div className="card">
        {" "}
        <Product
          name="Galaxy"
          price="35999 ₽"
          imgSrc="https://intocode.ru/d/react-project-1/images/2.jpg"
        />{" "}
        <button>Купить </button>
      </div>
      <div className="card">
        <Product
          name="Скутер"
          price="58950 ₽"
          discount='65500 ₽'  
          imgSrc="https://intocode.ru/d/react-project-1/images/3.jpg"
        />{" "}
        <button>Купить </button>
      </div>
      <div className="card">
        <Product
          name="Mонитор Samsung"
          price="12000 ₽"
          imgSrc="https://intocode.ru/d/react-project-1/images/4.jpg"
        />{" "}
        <button>Купить</button>
      </div>
      <div className="card">
        {" "}
        <Product
          name="Респераторная маска"
          price="500 ₽"
          imgSrc="https://intocode.ru/d/react-project-1/images/5.jpg"
        />{" "}
        <button>Купить </button>
      </div>
      <div className="card">
        {" "}
        <Product 
          name="Cтиральная машина"
          price="75000 ₽" 
          discount='100000 ₽'  
          imgSrc="https://intocode.ru/d/react-project-1/images/6.jpg"
        />{" "}
        <button>Купить </button>
      </div>
    </div>
  );
};

export default Cards;
