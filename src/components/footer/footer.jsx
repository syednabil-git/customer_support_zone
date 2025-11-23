import React from "react";
const Footer = ()=>{
    return(
         <div className="max-w-full bg-black text-white mt-20 mx-auto p-5">
            <div className="md:flex justify-between gap-50">
                
                    <div className="md:w-[700px] md:ml-30 mb-10">
                        <h1 className="font-bold text-xl mb-3">CS — Ticket System</h1>
                        <p className="text-gray-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
               <div className="md:flex gap-12 md:w-[1000px] mx-auto text-gray-100 mb-10">     
                <div>
                    <h1 className="font-bold text-xl mb-3">Company</h1>
                    <p className="mb-2">About Us</p>
                    <p className="mb-2">Our Mission</p>
                    <p className="mb-2">Contact Saled</p>
                </div>
                <div className="">
                    <h1 className="font-bold text-xl mb-3">Services</h1>
                    <p className="mb-2">Products & Services</p>
                    <p className="mb-2">Customer Stories</p>
                    <p className="mb-2">Download Apps</p>
                </div>
                <div className="">
                    <h1 className="font-bold text-xl mb-3">Information</h1>
                    <p className="mb-2">Privacy Policy</p>
                    <p className="mb-2">Terms & Conditions</p>
                    <p className="mb-2">Join us</p>
                </div>
                </div>
                <div className="w-[600px]">
                    <h1 className="font-bold text-xl mb-3">Social</h1>
                    <p className="mb-2">@CS — Ticket System</p>
                    <p className="mb-2">@CS — Ticket System</p>
                    <p className="mb-2">@CS — Ticket System</p>
                    <p className="mb-2">support@cst.com</p>
                </div>
            </div>
            <div className="text-center mt-5 text-gray-300">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
         </div>
    
    );
};
export default Footer;