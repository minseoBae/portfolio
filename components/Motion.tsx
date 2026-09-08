'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export type MotionDivProps = React.ComponentProps<typeof motion.div>

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...rest }) => (
  <motion.div {...rest}>{children}</motion.div>
)

export { MotionDiv }
export default MotionDiv

export const MotionPresence: React.FC<React.ComponentProps<typeof AnimatePresence>> = ({
  children,
  ...rest
}) => <AnimatePresence {...rest}>{children}</AnimatePresence>

