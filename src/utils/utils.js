const checkListData = [
  {
    title: 'All Systems Check',
    state: 'Normal',
    color: '#9499C3'
  },
  {
    title: 'RENDEZVOUS BURN SLOW',
    state: 'Normal',
    color: '#9499C3'
  },
  {
    title: 'PREPARE RENDEZVOUS BURN',
    state: 'Normal',
    color: '#9499C3'
  },
  {
    title: 'THERMAL SHIELD',
    state: 'Applied',
    color: '#40C110'
  },
  {
    title: 'BURN Go/No-GO',
    state: 'Normal',
    color: '#9499C3'
  },
  {
    title: 'POWER COMPLETION',
    state: 'Awaiting',
    color: '#EA7B15'
  },
  {
    title: 'STATION DECK CHECK',
    state: 'Awaiting',
    color: '#9499C3'
  }
]

const statsData = [
  {
    title: 'Inertial Velocity',
    fill: 80,
    value: '7.68 km/s'
  },
  {
    title: 'Altitude',
    fill: 25,
    value: '390 km'
  },
  {
    title: 'Apogee',
    fill: 40,
    value: '404.4 km'
  },
  {
    title: 'Perigee',
    fill: 70,
    value: '389.4 km'
  }
]

const newStatsData = [
  {
    title: 'Inclination',
    fill: 65,
    value: '51.67°'
  },
  {
    title: 'Range to ISS',
    fill: 95,
    value: '0.02 km'
  }
]

export { checkListData, statsData, newStatsData };