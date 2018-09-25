import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'elctronic', content: 'Electronic', link: true },
  { key: 'gameConsole', content: 'Game & Console', link: true },
  { key: 'nintendo', content: 'Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector', active: true },
]

const EasyBreadcrumb = () => <Breadcrumb icon='right angle' sections={sections} />

export default EasyBreadcrumb