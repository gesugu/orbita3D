import MainPage from "../components/MainPage"
import ItemOneScreenInfo from "../components/ItemOneScreenInfo"
import ItemOneScreenInfo2 from "../components/ItemOneScreenInfo2"
import Planets from "../components/Planets"

export const routes = [
    {path: '/', element: <MainPage/>},
    {path: '/item2/:item_id', element: <ItemOneScreenInfo/>},
    {path: '/item3/:item_id', element: <ItemOneScreenInfo2/>},
    {path: '/models', element: <Planets/>},
]