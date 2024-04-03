import { Book, BookOpenText, ArrowUpFromDot, Timer, LucideIcon, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavProps = {
    id: string;
    name: string;
    to: string;
    icon: LucideIcon;
}

const menus: NavProps[] = [
    {
        id: 'adherents',
        name: 'Adhérents',
        to: "/adherents",
        icon: User,
    },
    {
        id: 'oeuvres',
        name: 'Oeuvres',
        to: "/oeuvres",
        icon: Book,
    }, 
	{
        id: 'emprunts',
        name: 'Emprunts',
        to: "/emprunts",
        icon: ArrowUpFromDot,
    },
	{
        id: 'reservation',
        name: 'Réservation',
        to: "/reservation",
        icon: Timer,
    },
]

const NavMenu = () => {
  return (
    <div className="flex flex-col h-full max-h-screen">
      <div className="flex h-14 items-center gap-4 border-b px-4 lg:h- [60px] lg:px-6">
        <BookOpenText className="size-6" />
        <span>Biblio WF</span>
      </div>
      
      <div className="flex-1">
        <nav>
            <ul className="w-full">
                {menus.map((menu) => (
                    <li key={menu.id} className="flex ml-2 gap-4 py-3 items-center cursor-pointer">
						<NavLink to={menu.to} className={({isActive}) => `flex gap-4 p-3 items-center hover:text-primary hover:bg-muted ${isActive ? "text-primary bg-muted" : undefined }`}>
							<menu.icon className="size-4" />
							<span>{menu.name}</span>
						</NavLink>
                        
                    </li>
                ))

                }
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
