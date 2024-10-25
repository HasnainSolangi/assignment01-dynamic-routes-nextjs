import { Metadata } from 'next';
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

// Metadata generation
export async function generateMetadata({ params }: { params: { country_name: string } }): Promise<Metadata> {
  const countryName = (await params).country_name.toLowerCase();
  const country = countryDetails[countryName];

  if (!country) {
    return { title: 'Country not found' };
  }
  return { title: `${country.name} - Details` };
}

// Main page component
const CountryPage = async ({ params }: { params: { country_name: string } }) => {
  const countryName = (await params).country_name.toLowerCase();
  const country = countryDetails[countryName];

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
};

export default CountryPage;
