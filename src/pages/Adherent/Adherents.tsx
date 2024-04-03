import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const Adherents = () => {
  return (
    <div>
      <PageTitle>Liste des Adhérents</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Adherents
