import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  return (
    <div className="flex gap-3 text-sm">
      <button onClick={() => changeLanguage('az')} className="hover:underline">AZ</button>
      <button onClick={() => changeLanguage('en')} className="hover:underline">EN</button>
      <button onClick={() => changeLanguage('ru')} className="hover:underline">RU</button>
    </div>
  )
}

export default LanguageSwitcher
