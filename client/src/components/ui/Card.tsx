import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
}

function Card({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
        shadow-lg
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

export default Card