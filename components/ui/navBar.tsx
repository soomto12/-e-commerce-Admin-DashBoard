import { ModeToggle } from "./themeMood"
import { Avatar, AvatarImage, AvatarFallback } from "./avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

const NavBar = ()=>{
    return(
<div className="flex items-center justify-between p-4" >
    {/* left*/}
    collapseButton
    {/* right*/}
    <div className="flex  mx-4  items-center gap-3">
<Link href="/"  > DashBoard  </ Link>

<ModeToggle/>

    
        <DropdownMenu >
      <DropdownMenuTrigger asChild>
           <Avatar>
    <AvatarImage src="https://github.com/shadcn.png"/>
        
    <AvatarFallback>
        Cn
    </AvatarFallback>
</Avatar>
      </DropdownMenuTrigger >
      <DropdownMenuContent className=" mt-4 mr-3">
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>



    </div>
    
</div>
    )
}

export default NavBar