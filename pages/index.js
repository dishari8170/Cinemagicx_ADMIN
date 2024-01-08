import {useState} from "react";
import axios from "axios";
import Sidex from "@/Comp/Sidex";

export default () => {


    const [us, setu] = useState({})


    return <>





    {/*<div className="bg-danger  p " style={{width:"200px",height:"200px"}}></div>*/}

        {/*<Sidex>*/}


        <div className="w-100 bg-white d-flex justify-content-center pt-5">

            <div className="">
                <input type="text" id="postex"/>

                <br/>
                <div className="btn btn-primary" onClick={va => {


                    const c = document.getElementById("postex")

                    const ne = "/api/hello?d=" + c.value

                    const nd = {c: c.value}

                    axios.post(ne, nd).then(res => {
                        setu(res.data)
                    })
                }}> sent me
                </div>


            </div>
            <div className="">
                <input type="text" id="postex"/>

                <br/>
                <div className="btn btn-primary" onClick={va => {


                    const c = document.getElementById("postex")

                    const ne = "/api/hello?d=" + c.value

                    const nd = {c: c.value}

                    axios.get(ne).then(res => {

                        setu(res.data)


                    })


                }}> sent me
                </div>
            </div>
            <div className="p-5 mt-5 ">


                {JSON.stringify(us)}


            </div>

        </div>
{/*</Sidex>*/}
    </>

}