import Alluramlingayya from "#components/alluramlingayya"
import Search from "./components/search"
import Counter from "./components/counterapp"
import CustomCorousel from "./components/customcorosuels"
import CustomNavbar from "./components/customnavbar"
import Products from "./components/products"
import VoiceButton from "./components/voicebutton"

function Home(){
  return(
      <>
        <CustomNavbar/>
        <CustomCorousel/>
       
        <Products/>
      
        <VoiceButton/>
      </>
  )
}
export default Home