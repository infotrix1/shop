import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useLocation } from '../../context/LocationContext';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060
};

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const { setLocation } = useLocation();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [landmark, setLandmark] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [useMap, setUseMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation({
      address,
      city,
      state,
      landmark,
      coordinates: selectedLocation
    });
    onClose();
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setSelectedLocation({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Set Your Location</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                fullWidth
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
                  required
                  fullWidth
                />

                <Input
                  label="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter state"
                  required
                  fullWidth
                />
              </div>

              <Input
                label="Landmark (Optional)"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Enter a nearby landmark"
                fullWidth
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={useMap}
                  onChange={(e) => setUseMap(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Use map to select location</span>
              </label>
            </div>

            {useMap && (
              <div className="h-64 rounded-lg overflow-hidden">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={selectedLocation}
                    zoom={13}
                    onClick={handleMapClick}
                  >
                    <Marker position={selectedLocation} />
                  </GoogleMap>
                </LoadScript>
              </div>
            )}

            <Button type="submit" fullWidth icon={<MapPin size={18} />}>
              Set Location
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};