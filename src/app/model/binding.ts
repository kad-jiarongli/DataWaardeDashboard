export interface CommoninfoBinding {
    abstract: {
      type:string,
      datatype: string,
      value: string;
    },
    accuralPeriodicity: {
        type:string,
        datatype: string,
        value: string;
    },
    comment: {
        type:string,
        datatype: string,
        value: string;
    },
    dataset: {
      type:string,
      datatype: string,
      value: string;
    },
    homepage: {
        type:string,
        datatype: string,
        value: string;
      },
    publisher: {
      type:string,
      datatype: string,
      value: string;
    },
    temporal: {
        type:string,
        datatype: string,
        value: string;
    },
    title: {
        type:string,
        datatype: string,
        value: string;
    }

  }

  export interface MeasurementBinding {
    atLeast4Stars:{
      type:string,
      datatype:string,
      value:boolean
    },
    distName:{
      type:string,
      value:string,
      "xml:lang":string
    },
    mechineReadable: {
      type:string,
      datatype:string,
      value:boolean
    },
    serviceUptime: {
      type:string,
      datatype:string,
      value:number
    }


  }