import { useEffect, useState } from 'react';
import './App.css'
import { FeatureMovie } from './components/FeatureMovie';
import { MovieRow } from './components/MovieRow';
import  Tmdb  from "./Tmdb";

export function App() {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o filme em destaque/feature
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')


      setFeatureData(chosenInfo)
    }

    loadAll()
  } ,[]);



  return (
    <div className="page">
      
      {featureData &&
        <FeatureMovie item={featureData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}