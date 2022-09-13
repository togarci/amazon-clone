export namespace AsideMenuTypes {

    export interface Menu {
        name: string,
        subMenu?: Array<string>
    }


    export interface itemMenu {
        categoryName: string,
        menu: Array<Menu>
    }

    export interface propsModal {
        showMenu: boolean,
        handleShowMenu: (value: boolean) => void
    }
}