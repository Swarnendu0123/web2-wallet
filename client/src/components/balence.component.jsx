import { useRecoilValue } from "recoil";
import { history, time } from "../stores/atoms/history.atom";
import { useEffect, useState } from "react";
import SendReceive from "./sendReceive.component";

const Balance = () => {
    const timeData = useRecoilValue(time);
    const historyData = useRecoilValue(history);
    const [cashInflow, setCashInflow] = useState(0);
    const [cashOutflow, setCashOutflow] = useState(0);

    const calculateInflow = () => {
        let inflow = 0;
        historyData.forEach((item, index) => {
            if (index > 0 && historyData[index] - historyData[index - 1] > 0) {
                inflow += historyData[index] - historyData[index - 1];
            }
        });
        return inflow;
    };

    const calculateOutflow = () => {
        let outflow = 0;
        historyData.forEach((item, index) => {
            if (index > 0 && historyData[index] - historyData[index - 1] < 0) {
                outflow += historyData[index] - historyData[index - 1];
            }
        });
        return outflow;
    };

    useEffect(() => {
        setCashInflow(calculateInflow());
        setCashOutflow(calculateOutflow());
    }, [historyData]);

    return (
        <div className="flex flex-col items-center m-10 p-2 bg-black text-white border-gray-800 border h-[500px] rounded-lg">
            <div className="p-3 shadow-xl rounded-md w-[500px] bg-black">
                <h4 className="font-bold">Balance</h4>
                <h1 id="balance" className="text-[70px]" style={{ color: '#58A6FF' }}>${historyData[historyData.length - 1]}</h1>
                <div className="flex">
                    <p className="p-2">
                        <span style={{ color: '#4CAF50' }}>+${cashInflow}</span>
                    </p>
                    <p className="p-2">
                        <span style={{ color: '#F44747' }}>-${cashOutflow}</span>
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto scroll-auto h-96 shadow-xl rounded-md w-[500px] bg-gray-800">
                <table className="min-w-full divide-y-2 text-sm">
                    <thead className="text-gray-400">
                        <tr className="font-bold">
                            <th className="whitespace-nowrap px-4 py-2"></th>
                            <th className="whitespace-nowrap px-4 py-2">Credit / Debit</th>
                            <th className="whitespace-nowrap px-4 py-2">Date</th>
                            <th className="whitespace-nowrap px-4 py-2">Balance</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {historyData.map((item, index) => (
                            index > 0 && historyData[index] - historyData[index - 1] > 0 ? (
                                <tr key={index} className="bg-green-600">
                                    <td className="whitespace-nowrap px-4 py-2">{historyData[index] - historyData[index - 1]}</td>
                                    <td className="whitespace-nowrap px-4 py-2">Credit</td>
                                    <td className="whitespace-nowrap px-4 py-2">{timeData[index]}</td>
                                    <td className="whitespace-nowrap px-4 py-2">{item}</td>
                                </tr>
                            ) : (
                                index > 0 && (
                                    <tr key={index} className="bg-red-600">
                                        <td className="whitespace-nowrap px-4 py-2">{historyData[index] - historyData[index - 1]}</td>
                                        <td className="whitespace-nowrap px-4 py-2">Debit</td>
                                        <td className="whitespace-nowrap px-4 py-2">{timeData[index]}</td>
                                        <td className="whitespace-nowrap px-4 py-2">{item}</td>
                                    </tr>
                                )
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Balance;
