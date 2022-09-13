import { Triangle } from "phosphor-react";
import { useState } from "react";

const ListMenu = () => {
    const [listMenuConta, setListMenuConta] = useState<Array<string>>([
        'Sua Conta',
        'Seus Pedidos',
        'Sua Lista de desejos',
        'Recomendado para você',
        'Programe e Poupe',
        'Sua assinatura Prime',
        'Inscrições e assinatura',
        'Gerencia seu conteúdo e dispositivos',
        'Seu Amazon Music',
        'Seu Prime Video',
        'Seu Kindle Unlimited',
        'Seu Amazon Drive em Amazon.com',
        'Seus aplicativos e dispositivos'
    ])

    return (
        <div className="group flex">
            <a className="relative py-2 hover:border-white border border-gray-900 px-2">
                <p className="text-white text-xs">Olá, faça seu login</p>
                <div className="flex items-center gap-1">
                    <span className="text-white text-xs font-bold">
                        Contas e Listas
                    </span>
                    <div className="rotate-180"><Triangle size={8} weight="fill" color="#FFF"/></div>
                </div> 

                <div className="hidden rounded mt-2 px-6 py-4 group-hover:block absolute z-10 w-[560px] right-[-150px] bg-white arrowTop">
                    <div className="flex-col w-full">
                        <div className="flex justify-center">
                            <button 
                                className="w-[200px] bg-[linear-gradient(180deg,#f8e3ad,#EEBA37)] rounded-[3px] text-sm border border-gray-400 py-1 px-5"
                            >
                                Faça seu login
                            </button>
                        </div>
                        <div className="text-xs text-center mt-2">
                            <span>Cliente novo? </span>
                            <span className="text-blue-600 cursor-pointer hover:underline">Comece aqui.</span>
                        </div>
                    </div>

                    <div className="flex border-t border-gray-200 mt-3 pt-4">
                        <div className="flex-col w-1/2">
                            <h1 className="font-bold mb-1">Suas Listas</h1>
                            <ul>
                                <li 
                                    className="text-[13px] cursor-pointer hover:text-orange-400"
                                >
                                    Criar uma Lista de desejos
                                </li>
                            </ul>
                        </div>
                        <div className="flex-col w-1/2 border-l border-gray-200 pl-6">
                            <h1 className="font-bold mb-1">Sua Conta</h1>
                            <ul>
                                {
                                    listMenuConta.map((elem: string) => (
                                        <li 
                                            className="text-sm cursor-pointer my-1 text-[13px] hover:text-orange-400"
                                        >
                                            {elem}
                                        </li>
                                    ))
                                    
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
            <div className="hidden group-hover:block w-full h-[calc(100%-102px)] left-0 absolute top-[102px] bg-[rgba(0,0,0,0.3)]"></div>
        </div>
    )
}

export default ListMenu;