import { useEffect } from 'react';

export default function AddContractBehaviour(ToWrapComponent) {
  let WrapperComponent = props => {
    const {
      actionRecommendationsGetAllAddresses,
      actionRecommendationsGetAllCountries
    } = props;

    useEffect(() => {
      actionRecommendationsGetAllAddresses();
      actionRecommendationsGetAllCountries();
    }, [
      actionRecommendationsGetAllAddresses,
      actionRecommendationsGetAllCountries
    ]);

    return <ToWrapComponent {...props} />;
  };

  return WrapperComponent;
}
