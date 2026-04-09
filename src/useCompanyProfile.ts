import { useEffect, useState } from 'react'
import { defaultCompanyProfile, type CompanyProfile } from './companyProfile'

const STORAGE_KEY = 'prescripta-company-profile'

export function useCompanyProfile() {
  const [profile, setProfile] = useState<CompanyProfile>(() => {
    if (typeof window === 'undefined') {
      return defaultCompanyProfile
    }

    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return defaultCompanyProfile
    }

    try {
      return { ...defaultCompanyProfile, ...(JSON.parse(raw) as Partial<CompanyProfile>) }
    } catch {
      return defaultCompanyProfile
    }
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  }, [profile])

  return { profile, setProfile }
}
