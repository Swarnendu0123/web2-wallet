import { useRecoilValue } from "recoil";
import { history, time } from "../stores/atoms/history.atom";
import { useEffect, useState } from "react";
import SendReceive from "./sendReceive.component";

const Balence = () => {
    const timeData = useRecoilValue(time)
    const historyData = useRecoilValue(history)
    const [chashInflow, setCashInflow] = useState(0)
    const [chashOutflow, setCashOutflow] = useState(0)

    const calculateInflow = () => {
        let inflow = 0
        historyData.map((item, index) => {
            if (historyData[index] - historyData[index - 1] > 0) {
                inflow += historyData[index] - historyData[index - 1]
            }
        })
        return inflow
    }

    const calculateOutflow = () => {
        let outflow = 0
        historyData.map((item, index) => {
            if (historyData[index] - historyData[index - 1] < 0) {
                outflow += historyData[index] - historyData[index - 1]
            }
        })
        return outflow
    }

    useEffect(() => {
        setCashInflow(calculateInflow())
        setCashOutflow(calculateOutflow())
    }, [historyData])

    return (
        <div className="flex  flex-col  items-center m-10 p-2">
            <div className="p-3 shadow-xl rounded-md w-[500px]">
                <h4 className="font-bold">Balence</h4>
                <h1 id="balence" className="text-[70px]">${historyData[historyData.length - 1]}</h1>
                <div className="flex">
                    <p className="p-2">
                        <span className="text-green-500">+${chashInflow}</span>
                    </p>
                    <p className="p-2">
                        <span className="text-red-500">-${chashOutflow}</span>
                    </p>
                </div>
            </div>
            
            <div className="overflow-x-auto  scroll-auto  h-96 shadow-xl rounded-md w-[500px]">
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
    )
}


export default Balence;