import { useState } from 'react';
import { types } from '../types';
import { MagnifyingGlass } from 'phosphor-react';

const SearchInput = ({ value, handleValue }: types.searchProp) => {
    const [filters, setFilters] = useState<string>('search-alias=aps');

    return (
        <>
            <div className="flex w-full group focus-within:border-[3px] border-orange-400 rounded-[9px]">
                <select
                    className="text-xs cursor-pointer rounded-l-[5px] pl-2 flex w-[75px] bg-gray-100"
                    name="filterSearch"
                    id="btn-filter"
                    value={filters}
                    onChange={(evt: any) => setFilters(evt.target.value)}
                >
                    <option value="aps">Todos</option>
                    <option value="grocery">Alimentos e Bebidas</option>
                    <option value="alexa-skills">Alexa Skills</option>
                    <option value="mobile-apps">Apps e Jogos</option>
                    <option value="automotive">Automotivo</option>
                    <option value="baby">Bebês</option>
                    <option value="beauty">Beleza</option>
                    <option value="fashion-luggage">Bolsas, Malas e Mochilas</option>
                    <option value="toys">Brinquedos e Jogos</option>
                    <option value="home">Casa</option>
                    <option value="popular">CD e Vinil</option>
                    <option value="computers">Computadores e Informática</option>
                    <option value="kitchen">Cozinha</option>
                    <option value="amazon-devices">Dispositivos Amazon</option>
                    <option value="dvd">DVD e Blu-Ray</option>
                    <option value="appliances">Eletrodomésticos</option>
                    <option value="electronics">Eletrônicos</option>
                    <option value="sporting">Esportes e Aventura</option>
                    <option value="hi">Ferramentas e Materiais de Construção</option>
                    <option value="videogames">Games</option>
                    <option value="mi">Instrumentos Musicais</option>
                    <option value="garden">Jardim e Piscina</option>
                    <option value="stripbooks">Livros</option>
                    <option value="digital-text">Loja Kindle</option>
                    <option value="office-products">Material para Escritório e Papelaria</option>
                    <option value="furniture">Móveis e Decoração</option>
                    <option value="pets">Pet Shop</option>
                    <option value="instant-video">Prime Video</option>
                    <option value="specialty-aps-sns">Programe e Poupe</option>
                    <option value="fashion">Roupas, Calçados e Joias</option>
                    <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Feminino</option>
                    <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Masculino</option>
                    <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Meninas</option>
                    <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Meninos</option>
                    <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Bebês</option>
                    <option value="hpc">Saúde e Cuidados Pessoais</option>
                </select>
                <input
                    className='indent-2 border-l group-focus-within:border py-2 w-full'
                    type="text"
                    value={value}
                    onInput={(value: any) => handleValue(value.target.value) }
                />
                <button className="bg-orange-300 py-2 px-3 rounded-r-[5px]">
                    <MagnifyingGlass size={22} />
                </button>
                <div className="hidden group-focus-within:block w-full h-[calc(100%-102px)] left-0 absolute top-[102px] bg-[rgba(0,0,0,0.3)]"></div>
            </div>
        </>
    )
}

export default SearchInput;