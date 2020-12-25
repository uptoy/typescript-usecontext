import React from 'react'
import {Store} from './Store'
import {IEpisodeProps} from './interfaces'
import {toggleFavAction} from './Actions'

const EpisodesList = React.lazy<any>(()=> import('./EpisodesList'))

export default function FavPage():JSX.Element{
    const {state,dispatch} = React.useContext(Store)

    const props:IEpisodeProps = {
        episodes:state.favorites,
        store:{state,dispatch},
        toggleFavAction,
        favorites:state.favorites
    }

    return(
        <React.Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EepisodeList {...props} />
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}