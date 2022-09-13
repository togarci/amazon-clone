import { useState } from 'react';
import { types } from '../types';
import { MagnifyingGlass } from 'phosphor-react';

const SearchInput = ({ value, handleValue }: types.searchProp) => {
    const [filters, setFilters] = useState<Array<types.getFilters>>();

    return (
        <>
            <div className="flex w-full group focus-within:border-[3px] border-orange-400 rounded-[9px]">
                <select 
                    className="text-xs cursor-pointer rounded-l-[5px] px-2 font-light"
                    name="filterSearch" 
                    id="btn-filter" 
                    value={value} 
                    onChange={(value: any) => handleValue(value)}
                >
                    <option value={0}>Todos</option>
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