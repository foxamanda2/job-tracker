import React, { useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

export function Companies() {
  const [companies, setCompanies] = useState([
    [
      {
        id: 1,
        position: 'Full Stack Developer',
        technology: null,
        contactName: 'Sarah Bill',
        contactEmail: 'sarah@example.com',
        remote: true,
        contactCount: 3,
        companyName: 'SDG',
        salary: 40000,
        benefits: true,
        companyLogo: null,
        description:
          'Full Stack Developer position for creating the new SDG Webpage',
      },
      {
        id: 2,
        position: 'Brista',
        technology: null,
        contactName: 'Harold Cleave',
        contactEmail: 'Harold@example.com',
        remote: false,
        contactCount: 1,
        companyName: 'TheFlyingLobster',
        salary: 20000,
        benefits: false,
        companyLogo: null,
        description: 'Coffee shop barista job opened for immediate hire',
      },
    ],
  ])
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
