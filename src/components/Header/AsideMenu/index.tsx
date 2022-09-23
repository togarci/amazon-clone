import { User, X, CaretRight, CaretDown, Key, CaretUp, ArrowLeft } from "phosphor-react";
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
                    name: 'Amazon Fire TV',
                    subMenu: [
                        {
                            categoryName: 'Amazon Fire Tv',
                            menu: [
                                { name: 'Fire TV Stick Lite' },
                                { name: 'Fire TV Stick' },
                                { name: 'Fire TV Stick 4K' },
                                { name: 'Controle Remoto por Voz com Alexa(com controles de TV)' },
                                { name: 'Apps e Jogos para Fire TV Stick' }
                            ]
                        }
                    ]                                        
                },
                {
                    name: 'Amazon Music',
                    subMenu: [
                        {
                            categoryName: 'Música Em Streaming',
                            menu: [
                                { name: 'Prime Music' },
                                { name: 'Amazon Music Unlimited' },
                                { name: 'Abrir o Web Player' },
                                { name: 'Ouça em qualquer lugar' }
                            ]
                        },
                        {
                            categoryName: 'Comprar Música',
                            menu: [
                                { name: 'CD, Vinil, DVD e Blu-ray' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Prime Video',
                    subMenu: [
                        {
                            categoryName: 'Prime Video',
                            menu: [
                                { name: 'Todos os títulos' },
                                { name: 'Assista em qualquer lugar' }
                            ]
                        },
                        {
                            categoryName: 'Amazon Originals',
                            menu: [
                                { name: "Toma Clancy's Jack Ryan" },
                                { name: 'Modern Love' },
                                { name: 'The Boys' },
                                { name: 'Good Omens' },
                                { name: 'The Marvelous Mrs. Maisel' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Aplicativos Amazon',
                    subMenu: [
                        {
                            categoryName: 'App Kindle',
                            menu: [
                                { name: 'Baixe o aplicativo Kindle' },
                                { name: 'Kindle Cloud Reader' },
                                { name: 'eBooks gratuitos' }
                            ]
                        },
                        {
                            categoryName: 'Amazon Shopping',
                            menu: [
                                { name: 'App Amazon Shopping' }
                            ]
                        },
                        {
                            categoryName: 'Amazon Appstore',
                            menu: [
                                { name: 'Baixe e Amazon Appstore' },
                                { name: 'Apps'},
                                { name: 'Jogos' },
                                { name: 'Como Instalar a Amazon Appstore' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Dispositivos Kindle e eBooks',
                    subMenu: [
                        {
                            categoryName: 'Dispositivos Kindle E Ebooks',
                            menu: [
                                { name: 'Kindle 10ª Geração' },
                                { name: 'Kindle Paperwhite' },
                                { name: 'Kindle Paperwhite Signature Edition' },
                                { name: 'Kindle Oasis' },
                                { name: 'Acessórios Kindle' },
                                { name: 'Gerencie seu conteúdo e dispositivos' },
                                { name: 'Sua Bibliote Kindle' },
                                { name: 'Suporte do Kindle' }
                            ]
                        },
                        {
                            categoryName: 'Kindle Unlimited',
                            menu: [
                                { name: 'Teste de graça por 30 dias' },
                                { name: 'Veja todos os eBooks para ler de graça' }
                            ]
                        },
                        {
                            categoryName: 'Prime Reading',
                            menu: [
                                { name: 'eBooks inclusos com o Amazon Prime' }
                            ]
                        },
                        {
                            categoryName: 'Ebooks Kindle',
                            menu: [
                                { name: 'Todos os eBooks' },
                                { name: 'Promoções Kindle' },
                                { name: 'Mais Vendidos' },
                                { name: 'eBooks em inglês' },
                                { name: 'Novidades em eBooks' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Echo e Alexa',
                    subMenu: [
                        {
                            categoryName: 'Echo E Alexa',
                            menu: [
                                { name: 'Echo Dot (3ª Geração)' },
                                { name: 'Echo Dot (4ª Geração)' },
                                { name: 'Echo (4ª Geração)' },
                                { name: 'Echo Studio ' },
                                { name: 'Echo Show 5 (2ª geração)' },
                                { name: 'Echo Show 8 (2ª geração)' },
                                { name: 'Echo Show 10' },
                                { name: 'Novo Echo Show 15' },
                                { name: 'Echo Buds' }
                            ]
                        },
                        {
                            categoryName: 'Alexa E Casa Inteligente',
                            menu: [
                                { name: 'Casa Inteligente' },
                                { name: 'Alexa Integrada' },
                                { name: 'Alexa para PC' },
                                { name: 'TVs com Alexa' }
                            ]
                        },
                        {
                            categoryName: 'Conteúdo E Recursos',
                            menu: [
                                { name: 'Conheça Alexa' },
                                { name: 'Alexa App' },
                                { name: 'Amazon Music' },
                                { name: 'Alexa Skills' },
                                { name: 'Privacidade da Alexa' }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            categoryName: 'Comprar Por Categoria',
            menu: [
                {
                    name: 'Alimento e Bebidas',
                    subMenu: [
                        {
                            categoryName: 'Alimentos E Bebidas',
                            menu: [
                                { name: 'Tudo em Alimentos e Bebidas' },
                                { name: 'Café e outras Bebidas' },
                                { name: 'Cereais e Granola' },
                                { name: 'Comidas para Bebês' },
                                { name: 'Grãos, Arroz e Massas' },
                                { name: 'Molhos' },
                                { name: 'Óleos e Azeites' },
                                { name: 'Lanches e Doces' }
                            ]
                        },
                        {
                            categoryName: 'Bebidas Alcoólicas',
                            menu: [
                                { name: 'Tudo em Bebidas Alcoólicas' },
                                { name: 'Whisky' },
                                { name: 'Gin' },
                                { name: 'Cervejas' },
                                { name: 'Cachaça' },
                                { name: 'Espumante e Champanhe' },
                                { name: 'Vodka' }
                            ]
                        },
                        {
                            categoryName: 'Veja Também',
                            menu: [
                                { name: 'Programe e Poupe' },
                                { name: 'Amazon Super' },
                                { name: 'Limpeza da Casa' }
                            ]
                        },
                    ]
                },
                {
                    name: 'Automotivo',
                    subMenu: [
                        {
                            categoryName: 'Automotivo',
                            menu: [
                                { name: 'Tudo em Automotivo' },
                                { name: 'Acessórios e Peças para Automóveis' },
                                { name: 'Acessórios e Peças para Motos' },
                                { name: 'Ferramentas e Equipamentos' },
                                { name: 'Eletrônicos e Tecnologia' },
                                { name: 'Óleos e Fluidos' },
                                { name: 'Rodas e Pneus' },
                                { name: 'Equipamentos de Proteção' },
                                { name: 'Cuidados Automotivos' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Bebês',
                    subMenu: [
                        {
                            categoryName: 'Bebês',
                            menu: [
                                { name: 'Tudo em Bebês' },
                                { name: 'Alimentação' },
                                { name: 'Troca de Fraldas' },
                                { name: 'Banho e Higiene' },
                                { name: 'Chupetas e Mordedpres' },
                                { name: 'Passeio' },
                                { name: 'Atividades e Brinquedos' },
                                { name: 'Moda para Bebês' },
                                { name: 'Quarto e Enxoval' },
                                { name: 'Segurança' }
                            ]
                        },
                        {
                            categoryName: 'Veja Tambem',
                            menu: [
                                { name: 'Lista do Bebê' },
                                { name: 'Amazon Family' },
                                { name: 'Programe e Poupe' },
                                { name: 'Amazon Super' }
                            ]
                        },
                    ]
                },
                {
                    name: 'Beleza e Cuidados Pessoais',
                    subMenu: [
                        {
                            categoryName: 'Beleza',
                            menu: [
                                { name: 'Tudo em beleza' },
                                { name: 'Dermocosméticos' },
                                { name: 'Maquiagem' },
                                { name: 'Perfumes' },
                                { name: 'Cabelo' },
                                { name: 'Secadores e Modeladores' },
                                { name: 'Rosto' },
                                { name: 'Corpo' },
                                { name: 'Manicure e Pedicure' }
                            ]
                        },
                        {
                            categoryName: 'Cuidados Pessoais',
                            menu: [
                                { name: 'Tudo em Cuidados Pessoais' },
                                { name: 'Banho' },
                                { name: 'Proteção Solar' },
                                { name: 'Desodorantes' },
                                { name: 'Higiene Bucal' },
                                { name: 'Para Bebês' },
                                { name: 'Geriátricos' },
                                { name: 'Depilação e Aparelhos de Barbear' },
                                { name: 'Vitaminas' },
                                { name: 'Suplementos' },
                                { name: 'Sexo e Sensualidade' }
                            ]
                        },
                        {
                            categoryName: 'Veja Também',
                            menu: [
                                { name: 'Cachos e Ondas' },
                                { name: 'Programe e Poupe' },
                                { name: 'Amazon Super' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Ver Tudo',
                    listMenu: [
                        {
                            name: 'Bolsas, Malas e Mochilas',
                            subMenu: []
                        },
                        {
                            name: 'Brinquedos e Jogos',
                            subMenu: []
                        },
                        {
                            name: 'Casa, Jardim e Limpeza',
                            subMenu: []
                        },
                        {
                            name: 'Celulares e Comunicação',
                            subMenu: []
                        },
                        {
                            name: 'Computadores e Informática',
                            subMenu: []
                        },
                        {
                            name: 'Cozinha',
                            subMenu: []
                        },
                        {
                            name: 'Eletrônicos, TV e Áudio',
                            subMenu: []
                        },
                        {
                            name: 'Esportes, Aventura e Lazer',
                            subMenu: []
                        },
                        {
                            name: 'Ferraentas e Construção',
                            subMenu: []
                        },
                        {
                            name: 'Filmes, Séries e Música',
                            subMenu: []
                        },
                        {
                            name: 'Games e Consoles',
                            subMenu: []
                        },
                        {
                            name: 'Livros',
                            subMenu: []
                        },
                        {
                            name: 'Papelaria e Escritório',
                            subMenu: []
                        },
                        {
                            name: 'PetShop',
                            subMenu: []
                        },
                        {
                            name: 'Roupas, Calçados e Acessórios',
                            subMenu: []
                        }
                    ]
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
                    name: 'Ver Tudo',
                    listMenu: [
                        {
                            name: 'Programe e Poupe',
                        },
                        {
                            name: 'Amazon Outlet',
                        },
                        {
                            name: 'Publique seu livro',
                            subMenu: []
                        },
                        {
                            name: 'Venda na Amazon'
                        }
                    ]
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
    const [secondaryListMenu, setSecondaryListMenu] = useState<Array<AsideMenuTypes.itemMenu>>([]);

    const showListMenu = (index: number, idx: number) => {
        let arrayMenu = JSON.parse(JSON.stringify(listMenu));
        arrayMenu[index].menu[idx].name === 'Ver Tudo'
        ? arrayMenu[index].menu[idx].name = 'Ver Menos'
        : arrayMenu[index].menu[idx].name = 'Ver Tudo'
        setListMenu(arrayMenu)
    }

    const transitionMenu = (value: number) => {
        document.getElementById('navMenu').style.transform = `translateX(${value}px)`
    }

    const openSubMenu = (itemMenu: AsideMenuTypes.Menu) => {
        console.log('teste');
        
        if (itemMenu.subMenu) {
            setSecondaryListMenu(itemMenu.subMenu);
            transitionMenu(-365)
        }
    }

    return (
        <>
            {
                showMenu &&
                <div className="absolute top-0 left-0 flex w-full h-full">
                    <aside id="menu" className="bg-white w-[365px] overflow-x-hidden">
                        <header className="w-full flex px-9 items-center gap-4 bg-gray-800 py-3">
                            <div className="bg-white rounded-full p-1">
                                <User size={22} weight="fill" color="#374151" />
                            </div>
                            <span className="text-white font-bold text-lg">Olá, faça seu login</span>
                        </header>

                        <nav id="navMenu" className="flex max-h-[calc(100%-55px)] flex-nowrap transition duration-500 ease-in-out">
                            <div id="mainNavMenu" className="min-w-full pt-2 pb-8 overflow-y-auto">
                                {
                                    listMenu.map((elem: AsideMenuTypes.itemMenu, index: number) => (
                                        <div key={`${index}-id-ul-nav`}>
                                            <h1 key={`${index}-title-item-menu`} className="font-bold text-lg pl-9 h-11 flex items-center">{elem.categoryName}</h1>
                                            <ul key={`${index}-list-item-menu`}>
                                                { 
                                                    elem.menu.map((element: AsideMenuTypes.Menu, idx: number) =>
                                                        element.listMenu 
                                                        ? (
                                                            <div key={`${idx}-id-item-menu-div`}>
                                                                { 
                                                                    listMenu[index].menu[idx].name === 'Ver Menos' && 
                                                                    <ul>
                                                                        <div className="pl-9 pr-4 my-2"><hr/></div>
                                                                        { 
                                                                            element.listMenu.map((elem: AsideMenuTypes.Menu, i: number) => (
                                                                                <li
                                                                                    key={`${index}-${idx}-${i}-item-submenu`}
                                                                                    className="flex justify-between cursor-pointer hover:bg-gray-200 text-sm h-11 items-center pl-9 pr-4"
                                                                                >
                                                                                    { elem.name }
                                                                                    { elem.subMenu && <CaretRight size={20} color={'gray'} /> }
                                                                                </li>
                                                                            )) 
                                                                        }
                                                                    </ul> 
                                                                }
                                                                
                                                                <li
                                                                    className="flex gap-1 cursor-pointer hover:bg-gray-200 text-sm h-11 items-center pl-9 pr-4"
                                                                    onClick={() => showListMenu(index, idx)}
                                                                >
                                                                    { element.name } 
                                                                    { element.name === 'Ver Tudo' ? <CaretDown size={20} color={'gray'} /> : <CaretUp size={20} color={'gray'} /> }                                                    
                                                                </li>
                                                            </div>

                                                        ) : (
                                                            <li onClick={() => openSubMenu(element)} key={`${idx}-item-menu`} className="flex justify-between cursor-pointer hover:bg-gray-200 text-sm h-11 items-center pl-9 pr-4">
                                                                { element.name }
                                                                { element.subMenu && <CaretRight size={20} color={'gray'} /> }
                                                            </li>
                                                        )
                                                )}
                                                </ul>
                                                {
                                                    (listMenu.length - 1 !== index) &&
                                                    <hr className="bg-gray-700 my-2"/>
                                                }
                                        </div>
                                    ))
                                }
                            </div>
                            <div id="secondaryNavMenu" className="min-w-full py-2 overflow-y-auto">
                                <header 
                                    onClick={() => transitionMenu(0)}
                                    className="flex gap-2 pl-9 py-3 items-center cursor-pointer hover:bg-gray-200"
                                >
                                    <ArrowLeft size={25} color={'gray'} />
                                    <span className="font-bold text-sm">
                                        MENU PRINCIPAL
                                    </span>
                                </header>
                                <hr/>
                                {
                                    secondaryListMenu.map((elem: AsideMenuTypes.itemMenu, index: number) => (
                                        <div key={`${index}-id-ul-nav`}>
                                            <h1 key={`${index}-title-item-menu`} className="font-bold text-lg pl-9 h-11 flex items-center">{elem.categoryName}</h1>
                                            <ul key={`${index}-list-item-menu`}>
                                                { 
                                                    elem.menu.map((element: AsideMenuTypes.Menu, idx: number) =>
                                                        <li key={`${idx}-item-menu`} className="flex justify-between cursor-pointer hover:bg-gray-200 text-sm h-11 items-center pl-9 pr-4">
                                                            { element.name }
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            {
                                                secondaryListMenu.length - 1 !== index &&
                                                <hr className="bg-gray-700 my-2"/>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </nav>
                    </aside>


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