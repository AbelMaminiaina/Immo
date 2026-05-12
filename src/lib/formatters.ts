export const formatPrice = (price: number, type: 'vente' | 'location'): string => {
  // Format in Malagasy Ariary (MGA)
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  const priceWithCurrency = `${formatted} Ar`
  return type === 'location' ? `${priceWithCurrency}/mois` : priceWithCurrency
}

export const formatPricePerSqm = (price: number, surface: number): string => {
  const pricePerSqm = Math.round(price / surface)
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(pricePerSqm)
  return `${formatted} Ar/m²`
}

export const formatSurface = (surface: number): string => {
  return `${surface} m²`
}

export const formatRooms = (rooms: number): string => {
  if (rooms === 1) return '1 piece'
  return `${rooms} pieces`
}

export const formatBedrooms = (bedrooms: number): string => {
  if (bedrooms === 0) return 'Studio'
  if (bedrooms === 1) return '1 chambre'
  return `${bedrooms} chambres`
}

export const formatAddress = (address: string, city: string, zipCode?: string): string => {
  if (zipCode) {
    return `${address}, ${zipCode} ${city}`
  }
  return `${address}, ${city}`
}

export const formatPropertyType = (type: 'vente' | 'location'): string => {
  return type === 'vente' ? 'A vendre' : 'A louer'
}

export const formatEnergyClass = (energyClass: string): string => {
  return `DPE: ${energyClass}`
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
