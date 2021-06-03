export const handlePropertyData = (data) => {
  const {
    property: { lineAddress, appraisedValue, appraisedRent },
    street: {
      publicHousing,
      breakdownHousePercentage,
      breakdownOccupancyPercentage,
      averageYield,
      averageIncome,
    },
    suburb: {
      dwellings,
      meanPeopleDwellings,
      medianAge,
      population,
      suburbPublicHousing,
      suburbBreakdownHousePercentage,
      suburbBreakdownOccupancyPercentage,
      suburbAverageIncome,
      daysOnMarket,
      netYield,
      vacancyRate,
      suburbMedianPrice,
      suburbMedianRent,
    },
    lga: {
      lgaAverageYield,
      lgaAverageIncome,
      lgaBreakdownHousePercentage,
      lgaBreakdownOccupancyPercentage,
    },
  } = data;

  return [
    {
      title: 'PROPERTY INTELLIGENCE',
      data: [
        {
          title: 'address',
          value: lineAddress,
        },
        {
          title: 'appraised value',
          value: `$${appraisedValue}`,
        },
        {
          title: 'appraised rent',
          value: `$${appraisedRent}`,
        },
        {
          title: 'appraised yield',
          value: ' - ',
        },
        {
          title: 'estimated sale price',
          value: ' - ',
        },
        {
          title: 'days on market',
          value: ' - ',
        },
        {
          title: 'discounting',
          value: ' - ',
        },
        {
          title: 'vendor distress',
          value: ' - ',
        },
      ],
    },
    {
      title: 'STREET INTELLIGENCE',
      data: [
        {
          title: 'public housing',
          value: publicHousing,
          // value: publicHousing || ' - ',
        },
        {
          title: 'houses',
          value: `${breakdownHousePercentage}%`,
        },
        {
          title: 'owner occupiers',
          value: `${breakdownOccupancyPercentage}%`,
        },
        {
          title: 'average yield',
          value: `${averageYield}%`,
        },
        {
          title: 'average household income',
          value: `${averageIncome}%`,
        },
      ],
    },
    {
      title: 'SUBURB INTELLIGENCE',
      data: [
        {
          title: 'total dwellings',
          value: dwellings,
        },
        {
          title: 'people per dwelling',
          value: meanPeopleDwellings,
        },
        {
          title: 'average age',
          value: medianAge,
        },
        {
          title: 'population',
          value: population,
        },
        {
          title: 'public housing',
          value: `${suburbPublicHousing}%`,
        },
        {
          title: 'houses',
          value: `${suburbBreakdownHousePercentage}%`,
        },
        {
          title: 'owner occupiers',
          value: `${suburbBreakdownOccupancyPercentage}%`,
        },
        {
          title: 'average household income',
          value: `$${suburbAverageIncome}pw`,
        },
        {
          title: 'days on market',
          value: daysOnMarket,
        },
        {
          title: 'net yield',
          value: `${netYield}%`,
        },
        {
          title: 'vacancy rate',
          value: `${vacancyRate}%`,
        },
        {
          title: 'suburb median price',
          value: `$${suburbMedianPrice}`,
        },
        {
          title: 'suburb median rent',
          value: `$${suburbMedianRent}pw`,
        },
      ],
    },
    {
      title: 'LGA INTELLIGENCE',
      data: [
        {
          title: 'average yield',
          value: `${lgaAverageYield}%`,
        },
        {
          title: 'average household income',
          value: `$${lgaAverageIncome}pw`,
        },
        {
          title: 'houses',
          value: `${lgaBreakdownHousePercentage}%`,
        },
        {
          title: 'owner occupiers',
          value: `${lgaBreakdownOccupancyPercentage}%`,
        },
      ],
    },
  ];
};
