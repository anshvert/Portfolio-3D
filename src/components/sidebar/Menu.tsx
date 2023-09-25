import { Dispatch, FC, SetStateAction } from 'react';
import {
    Code,
    Flame,
    Github,
    Home,
    Image as ImageIcon,
    Instagram,
    Layers,
    Linkedin,
    Scissors,
    Share2,
    Shirt,
    ShoppingCart,
    Ticket,
    Video,
    X,
    Youtube,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';
import {SiHive} from "react-icons/si";
import {RiCodeSSlashLine, RiMovie2Fill} from "react-icons/ri";
import {BsDiscord} from "react-icons/bs";
import {FaRadiation} from "react-icons/fa6";
import {GiRaiseZombie} from "react-icons/gi";
import {MdPersonalInjury} from "react-icons/md";
import { IconContext } from "react-icons"
import "../../app/globals.css"

interface MenuProps {
    sideBarSection: string
    setSideBarSection: Dispatch<SetStateAction<any>>;
}

const Menu: FC<MenuProps> = ({sideBarSection, setSideBarSection}) => {
    const { showMenuVisibility } = useMenu();
    return (
        <div
            className="flex relative flex-col h-full p-2 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-2"
            onClick={() => showMenuVisibility(false)}>
            <div className="block lg:hidden p-2 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                <X className={`text-primary`} />
            </div>
            {/* List 1 */}
            <div className='list-hover'>
                <List link="/" effect="slideUp">
                    <Home />
                    <span className='large-text'>Home</span>
                </List>
            </div>
            {/*<List link="/" effect="slideUp">*/}
            {/*    <Flame /> Trending*/}
            {/*</List>*/}
            {/*<List link="/" effect="slideUp">*/}
            {/*    <Code /> Snippets*/}
            {/*</List>*/}
            {/*<List link="https://www.instagram.com/ezsnippet/" effect="slideUp">*/}
            {/*    <Video /> Videos*/}
            {/*</List>*/}

            {/* List 2 */}
            <div className="mt-5">Socials</div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://www.instagram.com/ansh_vert/"
                        effect="slideUp">
                        <Instagram color="#b5179e" />
                        <span className='large-text'>Instagram</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert"
                        effect="slideUp">
                        <Github color="#2a9d8f" />
                        <span className='large-text'>Github</span>
                    </List>
                </div>
                {/*<List*/}
                {/*    target="_blank"*/}
                {/*    link="https://www.youtube.com/channel/UCWYz4W6m1toUP7x0M1od3fA"*/}
                {/*    effect="slideUp">*/}
                {/*    <Youtube color="#e63946" /> Youtube*/}
                {/*</List>*/}
                {/*<List*/}
                {/*    target="_blank"*/}
                {/*    link="https://stackoverflow.com/users/20331641/neeraj-walia"*/}
                {/*    effect="slideUp"*/}
                {/*>*/}
                {/*    <Layers color="#f77f00" /> Stack overflow*/}
                {/*</List>*/}
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://www.linkedin.com/in/ansh00000000/"
                        effect="slideUp">
                        <Linkedin color="#0277b5" />
                        <span className="large-text">LinkedIn</span>
                    </List>
                </div>
            {/* List 3 */}
            <div className="mt-5">Projects</div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/PostHive"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                            <SiHive />
                        </IconContext.Provider>
                        <span className="large-text">PostHive</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank" 
                        link="https://github.com/anshvert/CodeNub"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <RiCodeSSlashLine />
                        </IconContext.Provider>
                        <span className="large-text">CodeNub</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/Portfolio"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <MdPersonalInjury />
                        </IconContext.Provider>
                        <span className='large-text'>Personal Portfolio</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/Discode"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <BsDiscord />
                        </IconContext.Provider>
                        <span className='large-text'>Discode</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/App-Radiant"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <FaRadiation />
                        </IconContext.Provider>
                        <span className='large-text'>App Radiant</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/Mender"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <RiMovie2Fill />
                        </IconContext.Provider>
                        <span className='large-text'>Mender</span>
                    </List>
                </div>
                <div className='list-hover'>
                    <List
                        target="_blank"
                        link="https://github.com/anshvert/ZombieFight"
                        effect="slideUp">
                        <IconContext.Provider value={{ color: '#CCCCCC', className: 'contactIcon', size: '25' }}>
                        <GiRaiseZombie />
                        </IconContext.Provider>
                        <span className='large-text'>Zombie Fighter</span>
                    </List>
                </div>
        </div>
    );
};

export default Menu;
