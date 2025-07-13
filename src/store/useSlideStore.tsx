import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { Slide } from '@/lib/types'

interface SlideState {
    slides: Slide[]
    setSlides: (slides: Slide[]) => void
}

export const useSlideStore = create(
    persist<SlideState>(
        (set) => ({
            slides: [],
            setSlides: (slides: Slide[]) => set({ slides })
        }),
        {
            name: 'slides-storage'
        }
    )
)