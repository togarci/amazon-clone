interface prop {
    toggleVar: boolean,
    handleToggleVar: (value: boolean) => void
}

const ModalEndereco = ({ toggleVar, handleToggleVar }: prop) => {
    return (
        <div>
            {
                toggleVar && 
                <>
                    <div className="absolute top-0 w-full h-full flex-1 flex items-center justify-center">
                        <div className="bg-white rounded-xl flex-col z-10 items-center w-[375px]">
                            <header className="px-6 py-4 border-b-[1px] border-zinc-300 bg-zinc-200 rounded-t-xl">
                                <span className="font-bold">Escolha sua localização</span>
                            </header>
                            <hr />
                            <div className="px-6 py-4">
                                <span className="text-gray-500 text-xs">
                                    As opções e velocidade de entrega podem variar de acordo com o a região
                                </span>
                                <br />
                                <button className="rounded-lg text-sm my-4 w-full py-1 bg-yellow-400 text-center">
                                    Faça Login
                                </button>
            
                                <div className="flex items-center gap-2 text-xs pb-3 text-gray-500">
                                    <hr className="bg-gray-600 flex-1" />
                                    ou insira um CEP do Brasil
                                    <hr className="bg-gray-600 flex-1"/>
                                </div>
            
                                <div className="flex gap-3 items-center">
                                    <input type="text" className="w-2/4 indent-2 h-8 border border-black rounded shadow"/>
                                    <span> - </span>
                                    <input type="text" className="w-1/3 indent-2 h-8 border border-black rounded shadow" />
                                    <button 
                                        className="h-8 px-4 border border-zinc-400 text-sm rounded shadow"
                                    >Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => handleToggleVar(false)} className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
                </>
            }
        </div>
    )
}

export default ModalEndereco;