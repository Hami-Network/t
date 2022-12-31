import React, { useEffect, useRef, useState } from 'react'

function PaypalComponent() {
    
    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
          creteOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: 'table',
                  amount: {
                    currency_code: "CAD",
                    value: 650.00
                  }
                }
              ]
            })
          },
          onApprove: async(data,actions) => {
            const order = await actions.order.capture()
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          }
        }).render(paypal.current)
    } ,[])
  return (
    <div>
        <div className='' ref={paypal}></div>
    </div>
  )
}

export default PaypalComponent