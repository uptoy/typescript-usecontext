import React from 'react'
import {Store} from './Store'
import {IEpisodeProps} from './interfaces'
import {fetchDataAction,toggleFavAction} from "./Action";

const episodeList = React.lazy<any>(()=>import('./EpisodesList'))

export default function Homepage(){
    const {state,dispatch} = React.useContext(Store)

    React.useEffect(()=> {
        state.episodes.length == 0 && fetchDataAction()
    })

    const props:IEpisodeProps = {
        episodes:state.episodes,
        toggleFavAction,
        favorites:state.favorites
    }

    return(
        <React.Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EepisodeList {...props} />
                </section>
        </React.Fragment>
    )
}