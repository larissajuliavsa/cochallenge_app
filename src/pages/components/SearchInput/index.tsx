import '@reach/combobox/styles.css';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

export const SearchInput = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAYqlqkWMY1fzoXQE5Rp-ui6uXeipqm9yQ',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export const Map = () => {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};

const PlacesAutocomplete = ({ setSelected }: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Pesquise por um destino"
        style={{ border: 'none', outline: 'none', padding: '16px', borderRadius: '8px' }}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                style={{ border: 'none', outline: 'none' }}
                key={place_id}
                value={description}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
