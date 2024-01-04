import React from 'react'

const Home = () => {

    const checkout = async () =>{

        try {
            
            const res = await fetch("http://localhost:3000/api/checkout",{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({
                    items:[
                        {
                            id:'#id1',
                            quantity: 2,
                            price: 450, 
                            name: 'Old Hoody for winters'
                        }
                    ]
                })
            });

            const data = await res.json();
            window.location = data.url;

        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div>
      <button onClick={checkout}>Pay Now</button>
    </div>
  )
}

export default Home
