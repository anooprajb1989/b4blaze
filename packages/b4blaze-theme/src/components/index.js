
import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const b4Theme = ({ state }) => {
  return (
    <>
      <h1>Frontity Workshop</h1>
      <p>Current URL: {state.router.link}</p>
    </>
  )
}

export default connect(b4Theme);