export interface IProject {
    title: string,
    header: string,
    contents: string,
    status?: string,
    image?: string,
    buttons: IButtons[]

}

interface IButtons {
    name: string,
    link: string,
    status: boolean,
    disabled: boolean

}

export interface IExperience {
    time: string,
    header: string,
    contents: string,
    skils?: string[]
}