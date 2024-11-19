import React from 'react'
import { CSSProperties } from 'react'
import {Html, Body, Container, Text, Tailwind, Link, Preview} from '@react-email/components'

const WelcomeTemplate = ({name}: {name: String}) => {
  return (
    <Html>
      <Preview>Welcome aboard</Preview>
      <Tailwind>
        <Body className="bg-slate-200">
          <Container>
              <Text style={heading} className="text-lg">Hello {name}</Text>
              <Link href="fellowdevs.io">fellowdevs.io</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '32px'
}

export default WelcomeTemplate
