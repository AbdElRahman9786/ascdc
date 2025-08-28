"use client"
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

function Links() {
  const t=useTranslations();
  return (
  <>
    <div>
        <ul className="flex gap-10 text-white ">
          <li>
            <Link href="/aboutus">{t('About us')}</Link>
          </li>
          <li>
            <Link href="/aboutus">{t('Servecis')}</Link>
          </li>
          <li>
            <Link href="/aboutus">Work</Link>
          </li>
          <li>
            <Link href="/aboutus">Clints</Link>
          </li>
          <li>
            <Link href="#whyus">Why us</Link>
          </li>
        </ul>
      </div>
  </>
  )
}

export default Links
