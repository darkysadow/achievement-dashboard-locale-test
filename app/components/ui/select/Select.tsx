'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './Select.module.scss'

interface Option {
  value: string
  text: string
}

interface SelectProps {
  options: Option[]
  defaultValue?: Option
  placeholder?: string
  onChange?: (selectedOption: Option) => void
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  placeholder = 'Select...',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultValue)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: Option) => {
    setSelectedOption(option)
    onChange?.(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div
        className={`${styles.selectHeader} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <div className={styles.selectedValue}>{selectedOption.text}</div>
        ) : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
        <div className={styles.arrow}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00043 7.15626L0.34668 1.50251L1.40043 0.448761L6.00043 5.04876L10.6004 0.448761L11.6542 1.50251L6.00043 7.15626Z"
              fill="#535353"
            />
          </svg>
        </div>
      </div>
      <div className={styles.selectDropdown + ' ' + (isOpen ? styles.selectDropdownOpen : '')}>
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                selectedOption?.value === option.value ? styles.selected : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
