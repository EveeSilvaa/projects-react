import React from 'react'
import { ItemContainer } from './style';


function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Maria Evellyn</h3>
        <p>Descrição do repositório</p>
        <a href="#">Ver Repositório</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;