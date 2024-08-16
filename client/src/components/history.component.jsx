import { LineChart } from '@mui/x-charts';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { history, time } from '../stores/atoms/history.atom';

const History = () => {
    const historyData = useRecoilValue(history)
    const timeData = useRecoilValue(time)

    return (
        <div className='flex  flex-col  items-center m-10 p-2 border'>
            <h4>History</h4>
            <LineChart
                xAxis={[{ data: timeData, scaleType: 'point', }]}
                series={[
                    { data: historyData },
                ]}
                width={700}
                height={300}
            />


            <div className="overflow-x-auto  scroll-auto  h-96">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className='font-bold'>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Credit / Devid</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Balence</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {historyData.map((item, index) => (
                            historyData[index] - historyData[index - 1] > 0 ?
                                <tr className='bg-green-300'>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{historyData[index] - historyData[index - 1]}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Credit</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{timeData[index]}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item}</td>

                                </tr> :
                                <tr className='bg-red-300'>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{historyData[index] - historyData[index - 1]}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        Devid
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{timeData[index]}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item}</td>
                                </tr>
                        ))}


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default History;
