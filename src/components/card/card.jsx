import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ services, setServices, setInProgressCount, resolvedTasks, setResolvedTasks }) => {
   const [clickedCards, setClickCards] = useState([]);
   const [seletedTickets, setSelectedTickets] = useState([]);
  const handleCardClick = (ticket) => {
    if (clickedCards.includes(ticket.id)) return; 
        
        setClickCards([...clickedCards, ticket.id]);
        setInProgressCount(prev => prev + 1);

    setSelectedTickets(prev => [...prev, ticket]); 

    toast.success(`Ticket "${ticket.title}" added to Task Status!`,{
        position: "top-right"
    });

    
  };
  const handleComplete = (task) => {
    setSelectedTickets(prev => prev.filter(t => t.id !== task.id));
    setInProgressCount(prev => prev - 1);
    setResolvedTasks(prev => [...prev, task]);
    setServices(prev => prev.filter(item => item.id !== task.id));
     
  };
    return(
        <div className="max-w-[1200px] mx-auto mt-20 md:flex justify-between items-start gap-5 p-2 bg-gray-50">
            
           <div className="left-div mb-5">
             <div className=" md:w-[980px] mb-2">
                    <h1 className="font-semibold text-3xl">Customer Tickets</h1>
                </div>
            <div className="card grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[980px] ">
                {services.map((ticket) =>(
                    <div 
                        key={ticket.id}
                        onClick={() => handleCardClick(ticket)}  
              className="w-[400px] md:w-[480px] p-5 shadow-sm rounded-sm bg-white">
                    <div className="flex justify-between mb-2">
                        <h1 className="font-semibold text-xl">{ticket.title}</h1>
                        <button className="btn rounded-3xl bg-green-200 font-semibold text-lg">{ticket.status}</button>
                    </div>
                    <div className="mb-2">
                        <p>
                            {ticket.description}
                        </p>
                    </div>
                    <div className="flex justify-between mb-3">
                        <div className="flex justify-between gap-5">
                        <p>{ticket.serial}</p>
                        <p className="text-red-600 font-semibold">{ticket.priority}</p>
                    </div>
                    <div className="flex justify-between gap-5">
                        <p>{ticket.customer}</p>
                        <p> {ticket.createdAt}</p>
                    </div>
                    </div>
                </div>
                ))}
                
                
            </div>
           </div>
            
            <div className="taskStatus">
                <div className="mb-4">
                    <h1 className="font-semibold text-2xl">
                    Task Status
                    </h1>
                    
                    
                </div>
                {seletedTickets.length > 0 ? (
                    seletedTickets.map((item) =>(
                        <div className="bg-white p-2 mb-4 shadow-xl">
                    <h1 className="text-black font-semibold text-center">{item.title}</h1>
                    <button onClick={() => handleComplete(item)} className="btn w-full bg-[#02A53B] text-white mt-2">Complete</button>
                </div>
                    ))
                
                
                ) : (
                    <div>
                        <p>select a ticket to add to Task Status</p>
                    </div>
                ) }
                
                <div className="mt-5">
                    <h1 className="font-semibold text-2xl">
                    Resolved Task
                    </h1>
                    {resolvedTasks.length > 0 ? (
                        resolvedTasks.map(task => (
                            <div className="bg-blue-100 h-[60px] content-center p-2 font-semibold text-center mb-2 shadow-xl">
                        <p>{task.title}</p>
                    </div>
                        ))
                    ) : (
                        <p>No resolved tasks yet.</p>
                    
                    )}
                    
                    
                </div>
                
            </div>
        </div>
    );
};
export default Card;