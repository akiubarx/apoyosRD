import { CarpetasProvider } from './context/CarpetasProvider.jsx'
import { ArchivosProvider } from './context/ArchivosProvider.jsx'
//
const GlobalProvider = () => {
  <>
    <CarpetasProvider></CarpetasProvider>
    <ArchivosProvider></ArchivosProvider>
  </>
}
export { GlobalProvider }