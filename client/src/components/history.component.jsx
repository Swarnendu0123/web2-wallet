import { LineChart } from '@mui/x-charts';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { history, time } from '../stores/atoms/history.atom';

const History = () => {
    const historyData = useRecoilValue(history)
    const timeData = useRecoilValue(time)

    return (
        <div className='flex  flex-col  items-center m-10 p-10 border'>
            <h4>History</h4>
            <LineChart
                xAxis={[{ data: timeData }]}
                series={[
                    {
                        data: historyData,
                    },
                ]}
                width={500}
                height={300}
            />
    

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Balence</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cred/Dev</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                    {historyData.map((item, index) => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{historyData[index] - historyData[index-1]}</td>
                            
                        </tr>
                    ))}

                       
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default History;
