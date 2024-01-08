import {FaBars} from "react-icons/fa6";
import {
    FaCashRegister,
    FaHandHoldingUsd,
    FaHireAHelper,
    FaHome,
    FaPeopleArrows,
    FaPowerOff, FaSuperpowers,
    FaUser, FaVideo
} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {SiSololearn} from "react-icons/si";
import {GrLanguage} from "react-icons/gr";
import {GiRollingEnergy} from "react-icons/gi";
import {ImStatsBars} from "react-icons/im";
import {MdOutlineSlowMotionVideo} from "react-icons/md";



export default ( {children})=>{

    const [user, setuser] = useState({})


    function toggleSidebar() {
        const sidebarContent = document.getElementById('sidebar');
        sidebarContent.classList.toggle('show');


    }


    const router = useRouter()

    useEffect(()=>{


        if (localStorage.getItem("lol")){
            setuser( JSON.parse(localStorage.getItem("lol")))
        }


    },[])


    return <>
        <div className="">

            <div className="hdrxx d-flex align-items-center pe-4 justify-content-between" >
                <div className="text-white d-flex  align-items-center">
                    {/*<FaHome className=" mx-2 h2" onClick={toggleSidebar} />*/}
                    <img src="https://cinemagicx.com/assets/images/logo/logo.png"  className="rounded-circle mx-4" alt=""/>


                    {/*<div className="">*/}

                    {/*    <div className="fw-bolder ">Admin</div>*/}
                    {/*    <div className="fw-medium">#id-3456</div>*/}
                    {/*</div>*/}

                </div>

                <div className="text-white h3">
                    {/*Hotel Motel Club*/}
                </div>

                <FaBars className="text-white h2" onClick={toggleSidebar} />


            </div>



            <div className="d-flex overflow-x-hidden">


                <div id="sidebar" className=" sidebar ext-light-emphasis  xitem" >




                    <div className={`btn mt-4  ${(router.pathname === "/admin" ? " act" : "")}`} onClick={o=>{window.location.href="/admin"}}><FaHome className="me-2"/> Dashboard</div>



                    <div className={`btn ${(router.pathname === "/admin/publisher" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/publisher"}}> <FaUser className="me-2"/> Manage Publisher</div>
                    <div className={`btn ${(router.pathname === "/admin/publisherx" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/publisher"}}> <FaUser className="me-2"/> Manage Advertiser</div>


                    <div className={`btn ${(router.pathname === "/admin/genre" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/genre"}}> <GiRollingEnergy className="me-2"/> Manage Genre</div>

                    <div className={`btn ${(router.pathname === "/admin/genre" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/genre"}}> <GiRollingEnergy className="me-2"/> Manage ADS</div>

                    <div className={`btn ${(router.pathname === "/admin/language" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/language"}}> <GrLanguage className="me-2"/> Manage Language</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <SiSololearn className="me-2"/> Manage Categories</div>

                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <MdOutlineSlowMotionVideo className="me-2"/> Manage Videos</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <FaVideo className="me-2"/> Live Videos</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <FaUser className="me-2"/> Manage User</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <ImStatsBars  className="me-2"/>Uses Stat</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <ImStatsBars  className="me-2"/>Ads Stat</div>



                    <div className="text-danger"><FaPowerOff className="me-2"/> Logout</div>



                </div>

                <div className="w-100 rounded-3 p-4 " style={{backgroundColor:"#f8f8f8"}}>

                    {children}


                </div>

            </div>


        </div>
    </>



}