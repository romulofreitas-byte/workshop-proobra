'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

interface ModalContextType {
  isModalOpen: boolean
  modalContent: React.ReactNode | null
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
  ctaClicked: boolean
  setCtaClicked: (clicked: boolean) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)
  const [ctaClicked, setCtaClicked] = useState(false)

  const openModal = useCallback((content: React.ReactNode) => {
    setModalContent(content)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalContent(null)
    document.body.style.overflow = 'unset'
  }, [])

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalContent,
        openModal,
        closeModal,
        ctaClicked,
        setCtaClicked,
      }}
    >
      {children}
      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Fechar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}
