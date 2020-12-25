import React from 'react';
import {Store} from './Store'

export default function App() :JSX.Element{
  const {state,dispatch} = React.useContext(Store)

  React.useEffect(()=>{
    state.episodes.length == 0 && fetchDataAction()
  })

  const fetchDataAction = async()=> {
    const URL = 'https://api.tvmaze.com/singleserch/shows?q=risk-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type:'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }
console.log(state)

  return (
    <React.Fragment>
      <h1>aaa</h1>
      <p>iii</p>
      <section>
        {state.episodes.map((episode:any)=>{
          return(
            <section key={episode.id}>
                <img src={episode.image.medium} alt={`aaa ${episode.name}`} />
                <div>{episode.name}</div>
                <section>
                  season:{episode.season} number:{episode.number}
                </section>
            </section>
          )
        })}
      </section>
     </React.Fragment>
  );
}