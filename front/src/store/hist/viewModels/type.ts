export interface IHistData {
    time: number;
    value: number;
}

export interface IHist {
    temperature: IHistData[];
    humidity: IHistData[];
    luminance: IHistData[];
    weather: IHistData[];
}
