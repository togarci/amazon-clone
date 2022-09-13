import Image  from "next/image";
import Logo from '@/assets/amazonLogo.png'

import { useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";
import ModalEndereco from "./ModalEndereco";
import ListMenu from "./ListMenu";

const Header = () => {
    const [searchInput, setSearchInput] = useState<string>();
    const [modalEndereco, setModalEndereco] = useState<boolean>(false);    

    return (
        <header className="w-full bg-gray-900 flex-col justify-between">
            <div className="w-full flex h-16 items-center px-5 justify-between">
                <div className="w-25 mr-3 cursor-pointer border-gray-900 border hover:border-white">
                    <Image src={Logo}/>
                </div>

                <button 
                    onClick={() => setModalEndereco(!modalEndereco)}
                    className="w-25 h-14 flex gap-1 items-center px-2 border border-gray-900 hover:border-white"
                >
                    <MapPin color="#FFF" size={22} />
                    <span className="text-white font-bold text-sm">Selecione o endereço</span>
                </button>

                <div className="w-1/2">
                    <SearchInput
                        value={searchInput}
                        handleValue={(value: string) => setSearchInput(value)}
                    />
                </div>
                
                <ListMenu/>

                <a className="py-2 px-4 cursor-pointer hover:border-white border-gray-900 border">
                    <p className="text-white text-xs">Devoluções</p>
                    <p className="text-white text-xs font-bold">
                        e Pedidos
                    </p>
                </a>

                <a className="relative flex py-2 px-3 items-end cursor-pointer hover:border-white border-gray-900 border">
                    <ShoppingCart size={40} weight="fill" color="#FFF" />
                    <span className="text-white text-xs font-bold">Carrinho</span>
                    <span 
                        className="absolute font-bold  text-orange-600 top-3 left-7"
                    >
                       2
                    </span>
                </a>
            </div>
            <NavMenu/>
            <ModalEndereco
                toggleVar={modalEndereco}
                handleToggleVar={(vl: boolean) => setModalEndereco(vl)}
            />            
        </header>
    )
}

export default Header;