export const handlePropertyData = (data) => {
  const {
    property: {
      lineAddress,
      appraisedValue,
      appraisedRent,
      appraisedYield,
      motivationRating,
      dom,
    },
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
          value: lineAddress || ' - ',
        },
        {
          title: 'appraised value',
          value: appraisedValue ? `$${appraisedValue}` : ' - ',
        },
        {
          title: 'appraised rent',
          value: appraisedRent ? `$${appraisedRent}` : ' - ',
        },
        {
          title: 'appraised yield',
          value: appraisedYield ? `${appraisedYield}%` : ' - ',
        },
        {
          title: 'estimated sale price',
          value: ' - ',
        },
        {
          title: 'days on market',
          value: dom ? `${dom} days` : ' - ',
        },
        {
          title: 'discounting',
          value: ' - ',
        },
        {
          title: 'vendor distress',
          value: motivationRating || ' - ',
        },
      ],
    },
    {
      title: 'STREET INTELLIGENCE',
      data: [
        {
          title: 'public housing',
          value: publicHousing ? `${publicHousing}%` : ' - ',
        },
        {
          title: 'houses',
          value: breakdownHousePercentage
            ? `${breakdownHousePercentage}%`
            : ' - ',
        },
        {
          title: 'owner occupiers',
          value: breakdownOccupancyPercentage
            ? `${breakdownOccupancyPercentage}%`
            : ' - ',
        },
        {
          title: 'average yield',
          value: averageYield ? `${averageYield}%` : ' - ',
        },
        {
          title: 'average household income',
          value: averageIncome ? `$${averageIncome}pw` : ' - ',
        },
      ],
    },
    {
      title: 'SUBURB INTELLIGENCE',
      data: {
        general: [
          {
            title: 'total dwellings',
            value: dwellings || ' - ',
          },
          {
            title: 'people per dwelling',
            value: meanPeopleDwellings || ' - ',
          },
          {
            title: 'median age',
            value: medianAge || ' - ',
          },
          {
            title: 'population',
            value: population || ' - ',
          },
          {
            title: 'public housing',
            value: suburbPublicHousing
              ? `${suburbPublicHousing}%`
              : ' - ',
          },
          {
            title: 'houses',
            value: suburbBreakdownHousePercentage
              ? `${suburbBreakdownHousePercentage}%`
              : ' - ',
          },
          {
            title: 'owner occupiers',
            value: suburbBreakdownOccupancyPercentage
              ? `${suburbBreakdownOccupancyPercentage}%`
              : ' - ',
          },
          {
            title: 'average household income',
            value: suburbAverageIncome
              ? `$${suburbAverageIncome}pw`
              : ' - ',
          },
        ],
        market: [
          {
            title: 'days on market',
            value: daysOnMarket ? `${daysOnMarket} days` : ' - ',
          },
          {
            title: 'net yield',
            value: netYield ? `${netYield}%` : ' - ',
          },
          {
            title: 'vacancy rate',
            value: vacancyRate ? `${vacancyRate}%` : ' - ',
          },
          {
            title: 'suburb median price',
            value: suburbMedianPrice
              ? `$${suburbMedianPrice}`
              : ' - ',
          },
          {
            title: 'suburb median rent',
            value: suburbMedianRent
              ? `$${suburbMedianRent}pw`
              : ' - ',
          },
        ],
      },
    },
    {
      title: 'LGA INTELLIGENCE',
      data: [
        {
          title: 'average yield',
          value: lgaAverageYield ? `${lgaAverageYield}%` : ' - ',
        },
        {
          title: 'average household income',
          value: lgaAverageIncome ? `$${lgaAverageIncome}pw` : ' - ',
        },
        {
          title: 'houses',
          value: lgaBreakdownHousePercentage
            ? `${lgaBreakdownHousePercentage}%`
            : ' - ',
        },
        {
          title: 'owner occupiers',
          value: lgaBreakdownOccupancyPercentage
            ? `${lgaBreakdownOccupancyPercentage}%`
            : ' - ',
        },
      ],
    },
  ];
};
