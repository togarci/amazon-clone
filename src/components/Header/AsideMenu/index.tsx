import { User, X } from "phosphor-react";
import { useState } from "react";

import { AsideMenuTypes } from './types';

const AsideMenu = ({ showMenu, handleShowMenu }: AsideMenuTypes.propsModal) => {
    const [listMenu, setListMenu] = useState<Array<AsideMenuTypes.itemMenu>>([
        {
            categoryName: 'Destaques',
            menu: [
                {
                    name: 'Mais Vendidos'
                },
                {
                    name: 'Novidades da Amazon',
                },
                {
                    name: 'Produtos em alta'
                }
            ]
        },
        {
            categoryName: 'Conteúdo Digital E Dispositivos',
            menu: [
                {
                    name: 'Amazon Fire TV'
                },
                {
                    name: 'Amazon Music',
                },
                {
                    name: 'Prime Video'
                },
                {
                    name: 'Aplicativos Amazon'
                },
                {
                    name: 'Dispositivos Kindle e eBooks'
                },
                {
                    name: 'Echo e Alexa'
                },
            ]
        },
        {
            categoryName: 'Comprar Por Categoria',
            menu: [
                {
                    name: 'Alimento e Bebidas'
                },
                {
                    name: 'Automotivo',
                },
                {
                    name: 'Bebês'
                },
                {
                    name: 'Beleza e Cuidados Pessoais'
                },
                {
                    name: 'Ver Tudo'
                }
            ]
        },
        {
            categoryName: 'Programas e Recursos',
            menu: [
                {
                    name: 'Amazon Family'
                },
                {
                    name: 'Amazon Prime',
                },
                {
                    name: 'Dicas de Presentes'
                },
                {
                    name: 'Lista do Bebê'
                },
                {
                    name: 'Ver Tudo'
                }
            ]
        },
        {
            categoryName: 'Ajuda E Configurações',
            menu: [
                {
                    name: 'Sua Conta'
                },
                {
                    name: 'Ajuda',
                },
                {
                    name: 'Faça seu Login'
                }
            ]
        }
    ]);

    return (
        <>
            {
                showMenu &&
                <div className="absolute top-0 left-0 flex w-full h-full">
                    <div id="menu" className="bg-white w-[365px]">
                        <header className="w-full flex px-9 items-center gap-4 bg-gray-800 py-3">
                            <div className="bg-white rounded-full p-1">
                                <User size={22} weight="fill" color="#374151" />
                            </div>
                            <span className="text-white font-bold text-lg">Olá, faça seu login</span>
                        </header>
                        <nav className="pt-2 pb-8 max-h-[calc(100%-55px)] overflow-y-auto">
                        {
                            listMenu.map((elem: AsideMenuTypes.itemMenu, index: number) => (
                                    <>
                                        <h1 className="font-bold text-lg pl-9 h-11 flex items-center">{elem.categoryName}</h1>
                                        <ul>
                                            { elem.menu.map((element: AsideMenuTypes.Menu) => (
                                                <li className="cursor-pointer hover:bg-gray-200 text-sm h-11 flex items-center pl-9"
                                                >
                                                    {element.name}
                                                </li>    
                                            ))}
                                        </ul>
                                        {
                                            listMenu.length - 1 !== index &&
                                            <hr className="bg-gray-700 my-2"/>
                                        }
                                    </>
                                ))
                            }
                        </nav>
                    </div>


                    <div onClick={() => handleShowMenu(false)} className="flex-1 py-3 px-2 bg-[rgba(0,0,0,0.8)]">
                        <button>
                            <X size={30} weight="fill" color="#fff"/>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default AsideMenu;