
import NavBar from "../navbar/Navbar"
import dynamic from "next/dynamic"
import { Wrapper } from "../styles/Wrapper.style"
import styled from "styled-components"


const Background = dynamic(()=>import( "../background/Background"), {
    ssr: false
  })


const WrapperContainer = () =>{


    return (
        <div>
            <Wrapper>
                <NavBar />
                <Background />
             </Wrapper>
        </div>
    )
}

export default WrapperContainer