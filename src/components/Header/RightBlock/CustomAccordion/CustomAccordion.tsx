'use client'

import Image from 'next/image'
import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import styles from './CustomAccordion.module.scss'

export const CustomAccordion = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: 'English',
    flag: '/Flag United Kingdom.svg',
    alt: 'English',
  })
  const [selectedItem, setSelectedItem] = useState<string>('')

  const handleLanguageChange = (language: string, flag: string, alt: string) => {
    setSelectedLanguage({ language, flag, alt })
    setSelectedItem('')
  }

  const languagesGroup = [
    { language: 'English', flag: '/Flag United Kingdom.svg', alt: 'English' },
    { language: 'Русский', flag: '/Flag Russia.svg', alt: 'Русский' },
  ]

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={selectedItem}
      onValueChange={setSelectedItem}
      className={styles.accordionRoot}
    >
      <Accordion.Item value="item-1">
        <Accordion.Header className={styles.accordionHeader}>
          <Accordion.Trigger className={styles.accordionTrigger}>
            <Image src={selectedLanguage.flag} alt={selectedLanguage.alt} width={20} height={15} />
            <span className={styles.language}>{selectedLanguage.language}</span>
            <ChevronDownIcon className={styles.icon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.accordionContent}>
          <div className={styles.contentWrapper}>
            {languagesGroup.map(language => (
              <button
                key={language.language}
                className={styles.languageButton}
                onClick={() => handleLanguageChange(language.language, language.flag, language.alt)}
              >
                <img src={language.flag} alt={language.alt} />
                <span className={styles.language}>{language.language}</span>
              </button>
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
