import React, { useEffect, useState } from "react";
import EachCountry from "../components/EachCountry";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEachData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`,
      );

      const eachData = await res.json();

      setCountry(eachData[0]);
      setIsLoading(false);
    };

    setTimeout(() => {
      getEachData();
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && <EachCountry country={country} />}
    </div>
  );
};

export default CountryDetail;
