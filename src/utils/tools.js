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
          title: 'ADDRESS',
          value: lineAddress,
        },
        {
          title: 'APPRAISED VALUE',
          value: appraisedValue,
        },
        {
          title: 'APPRAISED RENT',
          value: appraisedRent,
        },
        {
          title: 'APPRAISED YIELD',
          value: ' - ',
        },
        {
          title: 'ESTIMATED SALE PRICE',
          value: ' - ',
        },
        {
          title: 'DAYS ON MARKET',
          value: ' - ',
        },
        {
          title: 'DISCOUNTING',
          value: ' - ',
        },
        {
          title: 'VENDOR DISTRESS',
          value: ' - ',
        },
      ],
    },
    {
      title: 'STREET INTELLIGENCE',
      data: [
        {
          title: 'PUBLIC HOUSING',
          value: publicHousing,
        },
        {
          title: 'HOUSES',
          value: breakdownHousePercentage,
        },
        {
          title: 'OWNER OCCUPIERS',
          value: breakdownOccupancyPercentage,
        },
        {
          title: 'AVERAGE YIELD',
          value: averageYield,
        },
        {
          title: 'AVERAGE HOUSEHOLD INCOME',
          value: averageIncome,
        },
      ],
    },
    {
      title: 'SUBURB INTELLIGENCE',
      data: [
        {
          title: 'TOTAL DWELLINGS',
          value: dwellings,
        },
        {
          title: 'PEOPLE PER DWELLING',
          value: meanPeopleDwellings,
        },
        {
          title: 'AVERAGE AGE',
          value: medianAge,
        },
        {
          title: 'POPULATION',
          value: population,
        },
        {
          title: 'PUBLIC HOUSING',
          value: suburbPublicHousing,
        },
        {
          title: 'HOUSES',
          value: suburbBreakdownHousePercentage,
        },
        {
          title: 'OWNER OCCUPIERS',
          value: suburbBreakdownOccupancyPercentage,
        },
        {
          title: 'AVERAGE HOUSEHOLD INCOME',
          value: suburbAverageIncome,
        },
        {
          title: 'DAYS ON MARKET',
          value: daysOnMarket,
        },
        {
          title: 'NET YIELD',
          value: netYield,
        },
        {
          title: 'VACANCY RATE',
          value: vacancyRate,
        },
        {
          title: 'SUBURB MEDIAN PRICE',
          value: suburbMedianPrice,
        },
        {
          title: 'SUBURB MEDIAN RENT',
          value: suburbMedianRent,
        },
      ],
    },
    {
      title: 'LGA INTELLIGENCE',
      data: [
        {
          title: 'AVERAGE YIELD',
          value: lgaAverageYield,
        },
        {
          title: 'AVERAGE HOUSEHOLD INCOME',
          value: lgaAverageIncome,
        },
        {
          title: 'HOUSES',
          value: lgaBreakdownHousePercentage,
        },
        {
          title: 'OWNER OCCUPIERS',
          value: lgaBreakdownOccupancyPercentage,
        },
      ],
    },
  ];
};
