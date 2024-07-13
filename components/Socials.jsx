'use client'

import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socials = [
  {icon: <FaWhatsapp />, path: ''},
  {icon: <FaGithub />, path: ''},
  {icon: <FaLinkedinIn />, path: ''},
]

const Socials = ({ContainerStyles, IconStyles}) => {
  return ( 
    <div className={ContainerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={IconStyles}>{item.icon}</Link>
      })}
    </div>
   );
}
 
export default Socials;