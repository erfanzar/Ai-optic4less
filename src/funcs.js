
export const Intrep = (x, xf, yf) => {
    const xv = xf[1] - xf[0]
    const xy = x - xf[0]
    const yv = yf[1] - yf[0]
    const xx = xy / xv
    return (xx * yv) + yf[0]

}


