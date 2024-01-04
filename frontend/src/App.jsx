import './App.css';
import shoes from './assets/shoe.jpg';
import shirt from './assets/shirt.jpg';
import top from './assets/top.jpg';
import shorts from './assets/shorts.jpg';
import axios from 'axios';

const App = () => {

    const products = [
        {
            img:shoes,
            name: "Shoes",
            price: 499
        },
        {
            img:shirt,
            name: "Shirt",
            price: 680
        },
        {
            img:top,
            name: "Top",
            price: 290
        },
        {
            img:shorts,
            name: "Short",
            price: 490
        }
    ]

    const checkoutHandler = async(amount) =>{

        
        const { data: key} = await axios.get(`http://localhost:3000/api/getkey`);
        const { data: order} = await axios.post(`http://localhost:3000/api/checkout`, {amount});
        
        console.log(key);

        const options = {
            key: key.key,
            amount: amount*100,
            curreny: 'INR',
            name: 'Razorpay product payment',
            descrption: 'This is just a test payment of Razorpay',
            image: 'https://avatars.githubusercontent.com/u/107191856?v=4',
            order_id: order.id,
            callback_url: 'http://localhost:3000/api/verification',
            prefill:{
                name: 'Arshad',
                email: 'arshad06@mail.com',
                contact: 1234567890
            },
            notes: {
                address: 'Razorpay Officals'
            },
            theme:{
                color: '#21130d'
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    }
  return (
    <div className='container'>
      <div className="cards">
        
        {
            products.map((i, index)=><div className="card" key={index}>
            <img src={i.img} alt="" />
            <h6>{i.name}</h6>
            <h3>Rs.{i.price}</h3>
            <button onClick={()=>checkoutHandler(i.price)}>Pay Now</button>
            </div>)
        }
      </div>
    </div>
  )
}

export default App
