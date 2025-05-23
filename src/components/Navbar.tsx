'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageSwitch from './LanguageSwitch'
import { useParams, useRouter } from 'next/navigation'
import { transferUrl } from '@/utils/locale'

export default function Navbar() {
  const t = useTranslations('nav')
  const router = useRouter()
  const { locale } = useParams()

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              href={transferUrl('/', locale)} 
              className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-110 origin-left"
            >
              <Image
                src="/images/fluxEz-logo.png"
                alt="FluxEz Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-3xl font-bold bg-gradient-to-br from-violet-600 via-primary-500 to-amber-500 bg-clip-text text-transparent hover:from-fuchsia-500 hover:via-primary-400 hover:to-amber-400 transition-colors duration-300">
                FluxEz
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => {
                  router.push(transferUrl('/', locale))
                  setTimeout(() => {
                    document.getElementById('faq-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }, 500)
                }}
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                {t('faq')}
              </button>
              <button
                onClick={() => {
                  router.push(transferUrl('/', locale))
                  setTimeout(() => {
                    document.getElementById('community-showcase')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }, 500)
                }}
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                {t('community')}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
} 