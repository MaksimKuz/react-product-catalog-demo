import {Chart} from "primereact/chart";
import {getCurrentMonth, getCurrentYear, getMonthName} from "../dateUtils.ts";
import {appStore} from "../models/AppStore.ts";

/**
 * Возвращает набор данных для отображения графика. Параметры задают начальный и конечный месяцы года и функцию для
 * получения данных за этот месяц (отдельно по рабочим и выходным дням).
 * */
function getLineData(startMonth: number, endMonth: number, dataFunc){
    let data = {
        labels: [],
        datasets: [
            {
                label: 'По рабочим дням',
                data: [],
                fill: false,
                backgroundColor: '#cac482',
                borderColor: '#726161',
                tension: 0.4
            },
            {
                label: 'По выходным',
                data: [],
                fill: false,
                backgroundColor: '#d68b8b',
                borderColor: '#a34646',
                tension: 0.4
            }
        ]
    };

    for (let i = startMonth; i <= endMonth; i++) {
        data.labels.push(getMonthName(i));
        data.datasets[0].data.push(dataFunc(i, true));
        data.datasets[1].data.push(dataFunc(i, false));
    }
    return data
}

/**
 * Компонент для отображения продаж по месяцам.
 * */
export default function SalesChart() {

    const dataFunc1 = (month, workDay)=>
        workDay ? appStore.продажиЗаМесяцПоРабочимДням(getCurrentYear(), month) :
                  appStore.продажиЗаМесяцПоВыходнымДням(getCurrentYear(), month)

    const dataFunc2 = (month, workDay)=>
        workDay ? appStore.продажиЗаМесяцПоРабочимДням(getCurrentYear()-1, month) :
                  appStore.продажиЗаМесяцПоВыходнымДням(getCurrentYear()-1, month)

    if (getCurrentMonth() < 7)
        return (
            <>
                {/* первый график за первую половину этого года */}
                <div>{getCurrentYear()}</div>
                <Chart type="line" data={getLineData(1, 6, dataFunc1)}/>
                {/* второй график за вторую половину предыдущего года */}
                <div>{getCurrentYear()-1}</div>
                <Chart className="mt-2" type="line" data={getLineData(7, 12, dataFunc2)}/>
            </>)
    else
        return (
            <>
                {/* первый график за вторую половину этого года */}
                <div>{getCurrentYear()}</div>
                <Chart type="line" data={getLineData(7, 12, dataFunc1)}/>
                <div>{getCurrentYear()}</div>
                {/* второй график за первую половину этого года */}
                <Chart className="mt-2" type="line" data={getLineData(1, 6, dataFunc1)}/>
            </>
        );
}
