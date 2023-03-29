import isoFetch from 'isomorphic-fetch';
import React from 'react';
import { useEffect, useState } from 'react';

const WithDataLoad = (config: any, propName: any) => (Component: any) => {
  const ComponentWithDataLoad = (props: any) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [allProps, setAllProps] = useState([]);
    const fetchError = (error: unknown) => {
      console.log(error);
    };
    const fetchSuccess = (data: any) => {
      setDataLoaded(true);
      setAllProps({ ...props, [propName]: data });
    };

    const loadData = async () => {
      try {
        const response = await isoFetch(config.URL, config);
        if (!response.ok) {
          throw new Error(`fetch error: ${response.status}`);
        }
        const data = await response.json();
        fetchSuccess(data);
      } catch (error: unknown) {
        fetchError(error);
      }
    };

    useEffect(() => {
      loadData();
    }, []);

    return (
      <>
        {!dataLoaded && <div>Loading...</div>}
        {dataLoaded && <Component {...allProps} />}
      </>
    );
  };
  const ComponentWithDataLoadMemo = React.memo(ComponentWithDataLoad);
  return ComponentWithDataLoadMemo;
};

export default WithDataLoad;
