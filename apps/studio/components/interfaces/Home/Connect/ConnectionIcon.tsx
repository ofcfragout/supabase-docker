import { BASE_PATH } from 'lib/constants'

import { useTheme } from 'next-themes'
import Image from 'next/image'
interface ConnectionIconProps {
  connection: any
}

const ConnectionIcon = ({ connection }: ConnectionIconProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <Image
      className="transition-all group-hover:scale-110"
      src={`${BASE_PATH}/img/libraries/${connection.toLowerCase()}${
        ['expo', 'nextjs'].includes(connection.toLowerCase())
          ? resolvedTheme?.includes('dark')
            ? '-dark'
            : ''
          : ''
      }-icon.svg`}
      alt={`${connection} logo`}
      width={12}
      height={12}
    />
  )
}

export default ConnectionIcon