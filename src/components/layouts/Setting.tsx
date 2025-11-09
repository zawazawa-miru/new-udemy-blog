'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"
import { logout } from "@/lib/actions/logout"

export default function Setting ({ session }: { session: Session }) {
    const handleLogout = async () => {
        await logout()
    }
    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="font-medium">
                {session.user?.name}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                ログアウト
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}