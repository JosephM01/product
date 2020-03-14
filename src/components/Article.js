import React from 'react'
import { AllOffers, Discount, Header, Name, Price, Shipping, Image } from './index'
import pic1 from './assets/death-stranding-ps4.jpg'

// Composing the Article component using all the individual components 
const Article = () =>
  <div className='article'>
    <div>
      <Header className=''>Ofertas del día</Header>
    </div>
    <div>
      <Image height='200' width='150' src={articleInfo.src} />
    </div>
    <div>
      <Name>{ articleInfo.name }</Name>
    </div>
    <div>
      <Price>{articleInfo.price}</Price>
      <Discount>{ articleInfo.discount }</Discount>
    </div>
    <div>
      <Shipping>{articleInfo.shipping}</Shipping>
    </div>
    <div>
      <div>
        <AllOffers>Ver todas las ofertas 
        <span><i className="fas fa-greater-than"></i></span>
        </AllOffers>
      </div>
      <div>
      </div>
    </div>
  </div>

// Article INFO

const articleInfo = {
  id: 1,
  name: 'Death Stranding Juego Ps4 Nuevo Cd Físico Original Sellado',
  alt: 'Death Strangind PS4 PIC',
  src: pic1,
  price: '$ 3.799', 
  discount: '38%',
  shipping: 'Envío gratis',
}


export default Article