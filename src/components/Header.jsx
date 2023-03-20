import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMatchRoute(route){
        if(route=== location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center
        px-4 max-w-6xl mx-auto h-16'>
            <div>
                <img onClick={()=>navigate("/")} className='h-12 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/2560px-Firebase_Logo.svg.png" alt="logo" />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li onClick={()=>navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/") && "text-black border-b-orange-400"}`}>Home</li>
                    <li onClick={()=>navigate("/offers")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/offers") && "text-black border-b-orange-400"}`}>Offers</li>
                    <li onClick={()=>navigate("/sign-in")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/sign-in") && "text-black border-b-orange-400"}`}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
