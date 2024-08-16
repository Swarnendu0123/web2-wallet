import { LineChart } from '@mui/x-charts';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { history, time } from '../stores/atoms/history.atom';
import SendReceive from './sendReceive.component';

const History = () => {
    const historyData = useRecoilValue(history)
    const timeData = useRecoilValue(time)

    return (
        <div className='flex  flex-col  items-center m-10 p-2'>
            <h4>History</h4>
            <div className=' p-2'>
                <LineChart
                    xAxis={[{ data: timeData, scaleType: 'point', }]}
                    series={[
                        { data: historyData },
                    ]}
                    width={600}
                    height={300}
                />
            </div>


            <SendReceive/>

        </div>
    );
};

export default History;
