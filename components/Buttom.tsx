import React from 'react'
import Link from 'next/link'

function Buttom() {
  return (
   <>
    <button className="border px-4 py-2 rounded border-white">
            <Link href="/contactus"> Contact us </Link>
          </button>
   </>
  )
}

export default Buttom
