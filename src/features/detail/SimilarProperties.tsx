import { useSimilarProperties } from '@/hooks/useProperties'
import { PropertyCard } from '@/components/property/PropertyCard'

interface SimilarPropertiesProps {
  propertyId: string
}

export const SimilarProperties = ({ propertyId }: SimilarPropertiesProps) => {
  const { data: similarProperties, isLoading } = useSimilarProperties(
    propertyId,
    3
  )

  if (isLoading || !similarProperties || similarProperties.length === 0) {
    return null
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-serif font-bold text-theme-primary mb-6">
        Biens similaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
