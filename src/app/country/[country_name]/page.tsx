
interface Country {
  name: string;
  population: number;
  capital: string;
}

const countryDetails: { [key: string]: Country } = {
  afghanistan: { name: 'Afghanistan', population: 41000000, capital: 'Kabul' },
  bangladesh: { name: 'Bangladesh', population: 170000000, capital: 'Dhaka' },
  egypt: { name: 'Egypt', population: 110000000, capital: 'Cairo' },
  indonesia: { name: 'Indonesia', population: 280000000, capital: 'Jakarta' },
  iran: { name: 'Iran', population: 87000000, capital: 'Tehran' },
  malaysia: { name: 'Malaysia', population: 34000000, capital: 'Kuala Lumpur' },
  morocco: { name: 'Morocco', population: 37000000, capital: 'Rabat' },
  pakistan: { name: 'Pakistan', population: 240000000, capital: 'Islamabad' },
  saudiarabia: { name: 'Saudi Arabia', population: 36000000, capital: 'Riyadh' },
  turkey: { name: 'Turkey', population: 85000000, capital: 'Ankara' },
};


interface CountryPageProps {
  params: Promise<{ country_name: string }>;
}

export default async function CountryPage({ params }: CountryPageProps): Promise<JSX.Element> {
  const { country_name } = await params;  // Await `params` here
  const country = countryDetails[country_name.toLowerCase()] || null;

  return (
    <div className="p-4">
      {country ? (
        <>
          <h1 className="text-3xl font-bold">{country.name}</h1>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Capital: {country.capital}</p>
        </>
      ) : (
        <p>Country not found.</p>
      )}
    </div>
  );
}
