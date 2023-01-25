function sum3(a: number, b: number): number;
function sum3(a: number, b: number, c: number): number;
function sum3(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

//sum3()