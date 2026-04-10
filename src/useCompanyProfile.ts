import { useEffect, useState } from 'react'
import { defaultCompanyProfile, type CompanyProfile } from './companyProfile'

const STORAGE_KEY = 'prescripta-company-profile'

export function useCompanyProfile() {
  const [profile, setProfile] = useState<CompanyProfile>(defaultCompanyProfile)
  const [readyToPersist, setReadyToPersist] = useState(false)

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY)

    if (raw) {
      try {
        setProfile({ ...defaultCompanyProfile, ...(JSON.parse(raw) as Partial<CompanyProfile>) })
      } catch {
        setProfile(defaultCompanyProfile)
      }
    }

    setReadyToPersist(true)
  }, [])

  useEffect(() => {
    if (!readyToPersist) {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  }, [profile, readyToPersist])

  return { profile, setProfile }
}
