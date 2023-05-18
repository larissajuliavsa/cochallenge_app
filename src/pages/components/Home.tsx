import { useEffect, useState } from 'react';

import { getRegisterHost } from '../../config/service';

const Home = () => {
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
    </div>
  );
};

export default Home;
