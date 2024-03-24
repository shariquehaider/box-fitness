export function validate (str: string, cnfStr: string): boolean {
    if (str === cnfStr) {
        return true;
    } else {
        return false;
    }
}