// import React, { useRef } from 'react'
// import './join.css';
// import emailjs from '@emailjs/browser';
// const join = () => {
//     // const form = useRef()

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_5goq8fk', 'template_0ygb1cp', form.current, '1fYSEifL2Y0a2O3F9')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };


//     return (
//         <div className='Join' id='join-us'>
//             <div className='left-j'>
//                 <hr />
//                 <div>
//                     <span className='stroke-text'>READY TO</span>
//                     <span>LEVEL UP</span>
//                 </div>
//                 <div>
//                     <span>YOUR BODY</span>
//                     <span className='stroke-text'>WITH US?</span>
//                 </div>
//             </div>
//             <div className='right-j'>
//                 <form ref={form} className='email-container' onSubmit={sendEmail} >
//                     <input type='email' name='user_email' placeholder='Enter your Email address' />
//                     <button className='btn btn-j' >Join Now</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default join



// ================================
import './join.css';
const join = () => {
    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <form className='email-container'  >
                    <input type='email' name='user_email' placeholder='Enter your Email address' />
                    <button className='btn btn-j' >Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default join