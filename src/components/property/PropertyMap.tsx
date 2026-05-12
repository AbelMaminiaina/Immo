import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface PropertyMapProps {
  latitude: number
  longitude: number
  title: string
}

export const PropertyMap = ({ latitude, longitude, title }: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current).setView([latitude, longitude], 15)
    mapInstanceRef.current = map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const icon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: #2563eb;
          width: 32px;
          height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        ">
          <div style="
            transform: rotate(45deg);
            color: white;
            font-size: 14px;
          ">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L4 9v12h16V9l-8-6z"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })

    L.marker([latitude, longitude], { icon })
      .addTo(map)
      .bindPopup(title)

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [latitude, longitude, title])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-xl overflow-hidden"
      aria-label={`Carte montrant l'emplacement de ${title}`}
    />
  )
}
