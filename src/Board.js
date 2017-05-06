import React from 'react';
import Dice from './Dice'

const Board = ({ roll, dice, keep, rollDice, toggleKept }) => {
  let maxRoll = roll === 3
  let disabled = maxRoll ? { disabled: true } : {}

  return (
    <div className="row">
      <div className="col s12 center">
        <br />
        <button
          className="btn"
          {...disabled}
          onClick={rollDice}
        >
          {maxRoll ? 'Score Rolls' : 'Roll'}
        </button>
      </div>
      <div className="col s12">
        <br />
      </div>
      <div className="col offset-m1"></div>
      { roll > 0 &&
        dice.map( (d, i) => {
          let kept = keep.includes(i)
          return <Dice key={i} index={i} kept={kept} toggleKept={toggleKept} value={d} />
        })
      }
    </div>
  )
}

export default Board;
