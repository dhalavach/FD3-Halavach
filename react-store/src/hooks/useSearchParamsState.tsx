import { useSearchParams } from 'react-router-dom';

export default function useSearchParamsState(
  searchParamName: string,
  defaultValue: string
): readonly [searchParamsState: string, setSearchParamsState: (newState: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  // Use the provided searchParamName to extract the relevant parameter value
  const searchParamsState = searchParams.get(searchParamName) ?? defaultValue;

  const setSearchParamsState = (newState: string) => {
    // Convert searchParams into an object and update the target search parameter
    const nextSearchParams = Object.fromEntries(searchParams.entries());
    nextSearchParams[searchParamName] = newState;

    // Set the updated search parameters
    setSearchParams(nextSearchParams);
  };

  return [searchParamsState, setSearchParamsState];
}
