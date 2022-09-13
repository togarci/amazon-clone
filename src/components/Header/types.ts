export namespace types {
    export interface searchProp {
        value: string,
        handleValue: (value: string) => void
    }

    export interface getFilters {
        id: number,
        name: string
    }
}