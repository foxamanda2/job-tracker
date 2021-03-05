import React, { useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

export function Companies() {
  consr[(companies, setCompanies)] = useState([])
  return (
    <main className="companies">
      <Panel
        title="Companies"
        headerAction={
          <a href="#new">
            <Icon name="plus" />
          </a>
        }
      >
        <PanelItem>
          <Company
            name="PetCo"
            url="https://pet.co"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore."
          ></Company>
        </PanelItem>
        <PanelItem>
          <Company
            name="ACME Inc."
            url="https://pet.co"
            description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
          ></Company>
        </PanelItem>
        <PanelItem>
          <Company
            name="ACME Inc."
            url="https://pet.co"
            description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
          ></Company>
        </PanelItem>
      </Panel>
    </main>
  )
}
