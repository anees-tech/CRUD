import React from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'

function ShowStudent() {
    let location = useLocation()


    let stdName = location.state?.stdName;
    let serialNumber = location.state?.serialNumber;
    let stdClassName = location.state?.stdClassName;
    let stdCNIC = location.state?.stdCNIC;
    let fatherName = location.state?.fatherName;
    let address = location.state?.address;
    let contact = location.state?.contact;
    let gender = location.state?.gender;



    return (
        <div>
            <Navbar />
            <div className="block max-w-full p-6 mb-5 mx-10 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                <h1 className=" flex items-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    <Link to={'/students'} className='mr-5 mt-2  text-center bg-white rounded-full hover:bg-gray-100 '>
                        <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='text-gray-600 hover:text-gray-900' fill="currentColor"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
                    </Link>
                    {stdName}'s profile
                </h1>
            </div>
            <div className=' w-2/5 flex justify-evenly p-6 mb-5  mx-10 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700   '>
                <ul className='text-white' >
                    <b>
                        <li>Name: </li>
                        <li>Serial Number: </li>
                        <li>Class Name: </li>
                        <li>Father Name: </li>
                        <li>Student CNIC: </li>
                        <li>Address: </li>
                        <li>Contact: </li>
                        <li>Gender: </li>
                    </b>
                </ul>
                <ul className='text-white' >
                    
                        <li>{stdName} </li>
                        <li>{serialNumber} </li>
                        <li>{stdClassName}</li>
                        <li>{fatherName} </li>
                        <li>{stdCNIC} </li>
                        <li>{address} </li>
                        <li>{contact} </li>
                        <li>{gender}</li>
               
                </ul>
            </div>
        </div>
    )
}

export default ShowStudent