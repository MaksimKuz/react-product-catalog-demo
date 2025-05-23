
export function getSeverity (product) {
    switch (product.inventoryStatus) {
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