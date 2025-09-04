'use client'

import dynamic from 'next/dynamic'
import React from 'react'

export type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & {
  initial?: any
  animate?: any
  whileInView?: any
  transition?: any
  viewport?: any
  exit?: any
  whileHover?: any
  layoutId?: string
}

const MotionDiv = dynamic(async () => {
  const mod = await import('framer-motion')
  const MDiv: React.FC<MotionDivProps> = ({ children, ...rest }) => {
    const { motion } = mod as any
    const C = motion.div
    return <C {...(rest as any)}>{children}</C>
  }
  return MDiv
}, { ssr: false })

export { MotionDiv }
export default MotionDiv

export const MotionPresence = dynamic(async () => {
  const mod = await import('framer-motion')
  const AP = (mod as any).AnimatePresence
  const C: React.FC<{ children: React.ReactNode; mode?: any }> = ({ children, ...rest }) => (
    <AP {...(rest as any)}>{children}</AP>
  )
  return C
}, { ssr: false })

