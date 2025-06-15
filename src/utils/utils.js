
export function getSeverity (inventoryStatus) {
    switch (inventoryStatus) {
        case 'ДОСТАТОЧНО':
            return 'success';

        case 'МАЛО':
            return 'warning';

        case 'ОТСУТСТВУЕТ':
            return 'danger';

        default:
            return null;
    }
}

const items = [
    { name: 'МАЛО', value: 0 },
    { name: 'ДОСТАТОЧНО', value: 1 },
    { name: 'ОТСУТСТВУЕТ', value: 2 }
];

export function statusItems (){
    return items;
}

export function getStatusIndex (status) {
    return items.findIndex(value => value.name === status);
}

export function getStatusFromIndex (index) {
    return items[index].name;
 }

export function getImageSrc (imageName) {
    return 'https://primefaces.org/cdn/primereact/images/product/'+imageName;
}

/**
 * Группирует массив по значениям свойства groupProp, суммируя сгруппированные элементы по значениям свойства sumProp.
 * @param arr
 * @param groupProp
 * @param sumProp
 * @returns Map, содержащий в качестве ключей свойства groupProp, а в качестве значений - суммы по значениям sumProp.
 */
export function groupThenSum(arr, groupProp, sumProp) {
    return arr.reduce((acc, item) => {
        let key = item[groupProp];
        let val = item[sumProp];
        acc.set(key, (acc.get(key) ?? 0) + val);
        return acc;
    }, new Map);
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
