import React from 'react'
import { viewGenerator } from '@/fetchGenerator'
import { API_COMING_SOON } from '@/constants'
import { pageName, moduleName } from '../constant'
import matrixComponentGenerator from '@/Components/matrixComponent'
import generateComponentWithProps from '@/utils/generateComponentWithProps'
import MovieCard from '@/Components/MovieCard'

const MatrixComponent = viewGenerator(
  {
    pageName,
    moduleName,
    API: API_COMING_SOON,
    view: matrixComponentGenerator({
      itemView: generateComponentWithProps(MovieCard, {
        hasStar: true,
        hasBuyButton: true
      }),
      cols: 5
    })
  }
)

const NowPlayingComponent = (props) => {
  return (
    <div>
      <h2>即将上映</h2>
      <MatrixComponent {...props} />
    </div >
  )
}

export default NowPlayingComponent