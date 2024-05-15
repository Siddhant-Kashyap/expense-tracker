import { PieChart } from '@mui/x-charts/PieChart';

  

const Chart = () => {
   
  return (
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'Food' },
          { id: 1, value: 15, label: 'Entertainment' },
          { id: 2, value: 20, label: 'Travel' },
        ],
      },
    ]}
    width={350}
    height={150}
  />
  )
}

export default Chart