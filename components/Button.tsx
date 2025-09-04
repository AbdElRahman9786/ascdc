import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Button() {
  const t =useTranslations()
  return (
   <>
    <button className="border px-4 py-2 rounded border-white">
            <Link href="/contactus"> {t('Contact us')}</Link>
          </button>
   </>
  )
}

export default Button
