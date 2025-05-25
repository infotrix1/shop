import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Location {
  address: string;
  city: string;
  state: string;
  landmark?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

interface LocationContextType {
  location: Location | null;
  setLocation: (location: Location) => void;
  isLocationSet: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [location, setLocation] = useState<Location | null>(() => {
    const savedLocation = localStorage.getItem('userLocation');
    return savedLocation ? JSON.parse(savedLocation) : null;
  });

  const handleSetLocation = (newLocation: Location) => {
    setLocation(newLocation);
    localStorage.setItem('userLocation', JSON.stringify(newLocation));
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation: handleSetLocation,
        isLocationSet: !!location
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};