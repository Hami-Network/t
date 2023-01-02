// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
// import React, { useEffect, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'

// // function PaypalComponent() {
// //   const { id } = useParams()

// //     const paypal = useRef()
// //     useEffect(() => {
// //         window.paypal.Buttons({
// //           creteOrder: (data, actions, err) => {
// //             return actions.order.create({
// //               intent: "CAPTURE",
// //               purchase_units: [
// //                 {
// //                   description: 'table',
// //                   amount: {
// //                     currency_code: "CAD",
// //                     value: 650.00
// //                   }
// //                 }
// //               ]
// //             })
// //           },
// //           onApprove: async(data,actions) => {
// //             const order = await actions.order.capture()
// //             console.log(order);
// //           },
// //           onError: (err) => {
// //             console.log(err);
// //           }
// //         }).render(paypal.current)
// //     } ,[])
// //   return (
// //     <div>
// //         <div className='' ref={paypal}></div>
// //     </div>
// //   )
// // }

// function PaypalComponent() {
//   const [modalOpen, setModalOpen] = useState < boolean > (false);
//   const [orderId, setOrderId] = useState("");
//   const [modalText, setModalText] = useState("");
//   const [paymentStatus, setPaymentStatus] = useState("Success");

//   const initialOptions = {
//     "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
//     currency: USD,
//   };

//   const closeModals = () => {
//     setModalOpen(false);
//   };

//   const closeModalsAndRedirect = () => {
//     window.location.href = "/";
//   };
//   return (
//     <div>
      
//       <PayPalScriptProvider options={initialOptions}>
//         <PayPalButtons
//           style={{ layout: "horizontal" }}
//           createOrder={async (data, actions) => {
//             try {
//               const orderId = await generateOrder(Id, currency);
//               setOrderId(orderId);
//               return orderId;
//             } catch {
//               Toastr.error("Error Creating Paypal Order");
//               return "";
//             }
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then(async (details) => {
//               // This function shows a transaction success message to your buyer.
//               let messageFromServer = "";
//               if (details?.purchase_units?.[0]?.payments?.captures) {
//                 try {
//                   const resFromServer = await recievePayment(
//                     details.id,
//                     details.purchase_units[0].payments["captures"][0].id
//                   );
//                   // @ts-ignore
//                   messageFromServer = resFromServer.message;
//                   // Make Calls to backend to changes in react state corresponding to successful payment here
//                   setPaymentStatus("Success");
//                   setModalText("Payment successful.");
//                   setModalOpen(true);
//                 } catch {
//                   Toastr.error(
//                     "Error enrolling student, please contact tech@xyz.com"
//                   );
//                 }
//               } else {
//                 setPaymentStatus("Fail");
//                 setModalText(
//                   "Payment failed. Please contact tech@xyz.com if money is deducted!"
//                 );
//                 setModalOpen(true);
//               }
//             });
//           }}
//           onError={(err) => {
//             setPaymentStatus("Fail");
//             setModalText(
//               "Payment failed from Paypal's end! Please try again after sometime."
//             );
//             setModalOpen(true);
//           }}
//         />
//       </PayPalScriptProvider>
//     </div>
//   )
// }

// export default PaypalComponent