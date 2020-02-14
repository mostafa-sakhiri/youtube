import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from '../components/character/index'
import PaginationToolbar from '../components/paginationToolbar/index'
import styled from 'styled-components'
import md5 from 'md5'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [offset, setOffset] = useState(0)
  const [prevBtnDisabled, togglePrevBtnState] = useState(true)
  const count = 20
  const pages = Array.from(Array(10).keys())

  const goToPreviousPage = () => {
    if (offset === 0) {
      togglePrevBtnState(true)
      return
    } else if (offset - count === 0) {
      togglePrevBtnState(true)
    } else {
      togglePrevBtnState(false)
    }

    offset !== 0 && setOffset(offset - count)
  }

  const goToNextPage = () => {
    togglePrevBtnState(false)
    setOffset(offset + count)
  }

  useEffect(() => {
    function fetchData() {
      let TIME_STAMP = 1
      let publicKey = '8f621e822f5274d5d95d31bd36ff08cf'
      let privateKey = '3139b9ef81405593894a4f3b9369bf9217515acb'
      //let filterName
      let hash = md5(`${TIME_STAMP}${privateKey}${publicKey}`)
      let url = `
        http://gateway.marvel.com/v1/public/characters?ts=${TIME_STAMP}&offset=${offset}&apikey=${publicKey}&hash=${hash}`
      //${filterName}`

      axios.get(url).then(({ data }) => {
        setCharacters(data.data.results)
      })
    }
    fetchData()
  }, [offset])

  return (
    <div className='App flex flex-wrap tc'>
      {characters &&
        characters.map((character, i) => (
          <Character key={i} model={character} />
        ))}
      <PaginationToolbar
        offset={offset}
        prevBtnDisabled={prevBtnDisabled}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      >
        <StyledUl type='none'>
          {pages.map(el => (
            <StyledLi key={offset + 1}>{offset + el}</StyledLi>
          ))}
        </StyledUl>
      </PaginationToolbar>
    </div>
  )
}

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  color: white;
`

const StyledLi = styled.li`
  padding: 0 4px;
`

export default Characters
