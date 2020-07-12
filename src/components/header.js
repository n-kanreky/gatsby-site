import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Styledli = styled.li`
  color: red;
`
const Styledlink = styled(Link)`
  color: red;
`

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Styledli>
            <Styledlink to="/">top</Styledlink>
          </Styledli>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
