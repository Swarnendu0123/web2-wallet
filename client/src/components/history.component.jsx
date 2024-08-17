import { axisClasses, LineChart, lineElementClasses } from '@mui/x-charts';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { history, time } from '../stores/atoms/history.atom';
import SendReceive from './sendReceive.component';

const History = () => {
    const historyData = useRecoilValue(history);
    const timeData = useRecoilValue(time);

    const isDownward = () => {
        if (historyData.length < 2) return false;
        return historyData[historyData.length - 1] < historyData[0];
    };


    const lineColor = isDownward() ? 'red' : 'green';

    return (
        <div className='flex flex-col items-center mt-10 p-2 bg-black  text-gray-200'>
            <div className='p-2 border border-gray-800 rounded-lg'>
                <LineChart
                    sx={(theme) => ({
                        [`.${lineElementClasses.root}`]: {
                            stroke: lineColor, // Set dynamic line color
                        },
                        [`.${axisClasses.root}`]: {
                            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                stroke: '#fff',
                                strokeWidth: 1,
                            },
                            [`.${axisClasses.tickLabel}`]: {
                                fill: '#fff', // Axis tick label color
                            },
                        },
                        border: `1px solid rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0,0,0'}, 0.1)`,
                        backgroundImage: `linear-gradient(rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0,0,0'}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0,0,0'}, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '35px 35px',
                        backgroundPosition: '20px 20px, 20px 20px',
                    })}
                    xAxis={[{ data: timeData, scaleType: 'point' }]}
                    series={[
                        { data: historyData },
                    ]}
                    width={600}
                    height={300}
                    className="custom-chart"
                    colors={['#fff']}
                />
            </div>
            <div className='border border-gray-800 rounded-lg mt-5'>
                <SendReceive />
            </div>
        </div>
    );
};

export default History;
