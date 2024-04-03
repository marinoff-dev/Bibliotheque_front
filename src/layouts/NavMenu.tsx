import { Book, BookOpenText, ArrowUpFromDot, Timer, LucideIcon, User } from "lucide-react";

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
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id} className="flex gap-4 py-3 px-5 items-center">
                        <menu.icon className="size-4" />
                        <span>{menu.name}</span>
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
