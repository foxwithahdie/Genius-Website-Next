import { Inter, Poppins } from 'next/font/google'

export const inter = Inter({
    weight: [ '300','400','700'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap', 
})

export const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',

})