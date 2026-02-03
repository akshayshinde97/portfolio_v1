import React from 'react'

function MSocialLink({ href, icon, label, target="_blank" }) {
  return (
    <a
    href={href}
    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
    aria-label={label}
    target={target}
  >
    {icon}
  </a>
  )
}

export default MSocialLink

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
//   <a
//     href={href}
//     className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
//     aria-label={label}
//   >
//     {icon}
//   </a>
// );