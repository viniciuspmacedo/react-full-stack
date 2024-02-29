import styled from "styled-components"
import Search from "../components/Search"
import LastReleases from "../components/LastReleases"

const HomeContainer = styled.div`
  
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`
function Home() {

  return (
    <HomeContainer>
      <Search />
      <LastReleases />
    </HomeContainer>
  )
}

export default Home
