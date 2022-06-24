import NavBar from "../components/navbar/Navbar"
import dynamic from "next/dynamic"
import WrapperContainer from "../components/Infra/Wrapper"

const Background = dynamic(()=>import( "../components/background/Background"), {
  ssr: false
})


export default function Home() {
  return (
    <div >
      <WrapperContainer />
    </div>
    )
  }
  
  // <NavBar/>