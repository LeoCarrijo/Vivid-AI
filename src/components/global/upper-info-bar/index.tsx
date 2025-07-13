import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { User } from '@prisma/client'
import React from 'react'
import SearchBar from './upper-info-searchbar'

type Props = {
    user: User
    children: React.ReactNode
}

function UpperInfoBar({ user }: Props) {


    return (
        <header className='sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 bg-background p-4 justify-between'>
            <SidebarTrigger className='-ml-1' />
            <Separator
                orientation='vertical'
                className='mr-2 h-4'
            />
            <div className='w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap'>
                <SearchBar />
            </div>
        </header>
    )
}

export default UpperInfoBar