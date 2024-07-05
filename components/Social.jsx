import Link from "next/link";
import {FaGithub, FaLinkedin, FaCode, FaLink} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/ananyabansal16'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/ananyabansall/'},
    {icon: <FaCode />, path: 'https://leetcode.com/u/Ananya_Bansal/'},
    {icon: <FaLink />, path: 'https://linktr.ee/AnanyaBansall'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}> 
            {socials.map((item, index) => {
                return ( 
                    <Link 
                        href={item.path} 
                        key={index} 
                        className={iconStyles}>
                            {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;