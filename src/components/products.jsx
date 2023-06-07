import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Product = (props) => {
    const {imgSrc, price, discount, name} = props
    return <Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src={imgSrc} className='cardImg'/>}
>
<Meta title={<><span>{price}</span> <span className='discount'>{discount}</span> </>}  description={name} />
</Card> 
}

export default Product;