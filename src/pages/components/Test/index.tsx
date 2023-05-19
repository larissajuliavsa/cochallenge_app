import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import { getRegisterHost } from '../../../config/service';

export const Test = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFetch = async () => {
      setLoading(true);

      try {
        const data = await getRegisterHost();
        setData(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getFetch();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando</p>
      ) : (
        data.map((value: any) => {
          return <p key={value.id}>{value.name}</p>;
        })
      )}
      <p>Home</p>
      <Button variant="contained">Home</Button>
    </div>
  );
};
