import { Figtree, Nunito_Sans } from 'next/font/google'

export const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})


export const nunitoSans = Nunito_Sans({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: 'swap',
})