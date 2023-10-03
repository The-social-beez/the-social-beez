// import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'The Social Beez | Our Services',
    description: 'Digital Marketing Agency in Badlapur - The SocialBeez',
}
type Props = {}

const Page = (props: Props) => {
    return (
        <main className="bg-wheat">
            <div id="bar" className="bg-[#fcb405] h-24">

            </div>
            <div className="min-h-[28rem] container font-bold text-6xl text-center pt-32 uppercase text-gray-800 mx-auto">
                <h1>Coming soon</h1>
            </div>
        </main>
    )
}

export default Page