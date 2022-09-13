import { List } from 'phosphor-react';
import { useState } from 'react';

import AsideMenu from "../AsideMenu";

const NavMenu = () => {
    const [asideMenu, setAsideMenu] = useState<boolean>(false);
    const [listMenu, setListMenu] = useState<Array<string>>([
        'Venda na Amazon',
        'Eletrônicos',
        'Ideias para Presente',
        'Brinquedos e Jogos',
        'Ferramentas e Construção',
        'eBooks Kindle',
        'Games',
        'Computadores',
        'Livros',
        'Amazons.clone.com.br'
    ]);

    return (
        <nav className="flex w-full px-3 py-1 bg-gray-700">
            <button 
                className="text-white font-bold text-sm flex items-center gap-1 px-2 border border-gray-700 hover:border-white"
                onClick={() => setAsideMenu(!asideMenu)}                
            >
                <List size={25} weight="bold" color="#FFF"/>
                Todos
            </button>
            <ul className="flex flex-1 items-center justify-between">
                {
                    listMenu?.map((elem: string) => (
                        <li className="text-sm text-white border border-gray-700 px-2 py-1 hover:border-white cursor-pointer">
                            {elem}
                        </li>
                    ))

                }
            </ul>
            <AsideMenu
                showMenu={asideMenu}
                handleShowMenu={(value: boolean) => setAsideMenu(value)}
            />
        </nav>
    )
}

export default NavMenu;