export namespace AsideMenuTypes {

    export interface Menu {
        name: string,
        subMenu?: Array<itemMenu>
        listMenu?: Array<Menu>
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