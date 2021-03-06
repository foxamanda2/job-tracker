import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'
import FakeCompanies from './FakeCompanies.json'

export function Companies() {
  const [companies, setCompanies] = useState([])
  const [loadedCompanies, setLoadedCompanies] = useState(false)

  useEffect(async function () {
    const response = await fetch('http://localhost:5000/api/Companies')
    const json = await response.json()

    setCompanies(json)
    setLoadedCompanies(true)
  }, [])
  if (companies.length === false) {
    return <div>Loading...</div>
  }

  if (companies.length === 0) {
    return <div className="null-state"> Time To find Jobs</div>
  }

  return (
    <main className="companies">
      <Panel title="Companies" headerAction={<a href="#new"></a>}>
        {companies.map(function (company) {
          return (
            <PanelItem key={company.id}>
              <Company
                name={company.companyName}
                email={company.contactEmail}
                description={company.description}
              ></Company>
            </PanelItem>
          )
        })}
      </Panel>
    </main>
  )
}
