import React, { useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'
import FakeCompanies from './FakeCompanies.json'

export function Companies() {
  const [companies, setCompanies] = useState(FakeCompanies)

  console.log(companies)

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
        {companies.map(function (company) {
          return (
            <PanelItem>
              <Company
                name={company.companyName}
                email={company.companyEmail}
                description={company.description}
              ></Company>
            </PanelItem>
          )
        })}
        <PanelItem>
          <Company
            name="PetCo"
            email="https://pet.co"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore."
          ></Company>
        </PanelItem>
        <PanelItem>
          <Company
            name="ACME Inc."
            email="https://pet.co"
            description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
          ></Company>
        </PanelItem>
        <PanelItem>
          <Company
            name="ACME Inc."
            email="https://pet.co"
            description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
          ></Company>
        </PanelItem>
      </Panel>
    </main>
  )
}
