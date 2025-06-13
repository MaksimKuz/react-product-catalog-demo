import {appStore} from "../models/AppStore.ts";
import {getCurrentYear} from "../dateUtils.ts";

function percentToColor(percent){
    if (percent < 20)
        return 'orange'
    if (percent < 40)
        return 'pink'
    if (percent < 60)
        return 'teal'
    if (percent < 80)
        return 'purple'
    if (percent < 90)
        return 'green'
    else
        return 'cyan'
}

export default function MostSaledProducts() {
    return (
        <>
            <ul className="list-none p-0 m-0">
                { appStore.самыеПродаваемыеПродукты(getCurrentYear(), 8).map(item =>
                    <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span className="text-900 font-medium mr-2 mb-1 md:mb-0">{item.product.name}</span>
                            <div className="mt-1 text-600">{item.product.category}</div>
                        </div>
                        <div className="mt-2 md:mt-0 flex align-items-center">
                            <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                 style={{height: '8px'}}>
                                <div className={`bg-${percentToColor(item.percent)}-500 h-full`} style={{width: '50%'}}/>
                            </div>
                            <span className={`text-${percentToColor(item.percent)}-500 ml-3 font-medium`}>%{item.percent.toFixed(1)}</span>
                        </div>
                    </li>)}
            </ul>
        </>
    );
}
