'use client'

import { Button } from '@/components/ui/button'
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import { useUser } from '@clerk/nextjs'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function NavFooter({ prismaUser }: { prismaUser: User }) {
    const { isLoaded, isSignedIn, user } = useUser()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <div className='flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden'>
                    {!prismaUser.subscription && (
                        <div className='flex flex-col items-start p-2 pb-3 gap-4 bg-background-80'>
                            <div className='flex flex-col items-start gap-1'>
                                <p className='text-base font-bold'>
                                    Get <span className='text-vivid'>Creative AI</span>
                                </p>
                                <span className='text-sm dark:text-secondary'>Unlock all features including AI and more</span>
                            </div>
                            <div className='w-full bg-vivid-gradient p-[1px] rounded-full'>
                                <Button
                                    className='w-full border-vivid text-primary font-bold text-center bg-background-80 hover:bg-background-90 rounded-full'
                                    variant={'default'}
                                    size={'lg'}
                                // onClick={handleUpgrading}
                                >
                                    {loading ? 'Upgrading...' : 'Upgrade'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default NavFooter