import React from "react";
const Nav = ()=>{
    return(
        <div className=" max-w-[1200px] mx-auto">
            <div className="md:flex justify-between items-center p-2">
                <div>
                <h1 className="font-bold text-2xl md:text-2xl text-center md:text-left">CS — Ticket System</h1>
            </div>
            <div className="flex justify-between md:gap-6 items-center text-sm">
            <p>Home</p>
            <p>FAQ</p>
            <p>Changeling</p>
            <p>Blog
            </p>
            <p>Download</p>
            <p>Contact</p>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:w-[120px]"> + New</button>
            </div>
            </div>
        </div>
    );
};
export default Nav;