export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes:Array<IEpisode>
    favorites:Array<IEpisode>
}

export interface IAction{
    type:string,
    payload:any
}

export interface IEpisodeProps{
    episodes:Array<IEpisode>
    store:{state:IState,dispatch:Dispatch}
    toggleFavAction:(state:IState,dispatch:Dispatch,episode:IEpisode)=>IAction
    favorites:Array<IEpisode>
}

export interface IEpisode {
    number: string
    season: string
    airdate:string
    airstamp:string
    airtime:string
    id:number
    image:{medium:string;original:string}
    name:string
}