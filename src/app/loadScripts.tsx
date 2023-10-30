"use client"
import React from 'react'
import Script from 'next/script'


type Props = {}

const LoadScripts = (props: Props) => {
  return (
    <>
      <Script
        async src="https://www.googletagmanager.com/gtag/js?id=G-K39NH2WJ72"
        // onLoad={() => {
        //   console.log('gtag Script has loaded')
        // }}
      />
      <Script
        id="gtag-script"
        // onLoad={() => {
        //   console.log('This gtag something aslo ran')
        // }}
      >
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-K39NH2WJ72');console.log('This gtag something aslo ran');`}
      </Script>
    </>
  )
}

export default LoadScripts