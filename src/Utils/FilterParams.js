export function requestBodyData (data) {
    for (var propName in data) {
        if (!data[propName]) {
          delete data[propName];
        }
      }
      return data
  }

  export function quotationRequestBodyData (data) {
    for (var propName in data) {
      if (Array.isArray(data[propName])) {
        data[propName]&&data[propName].map((item)=>{
          for(var propName2 in item){
            let propSymb = Object.keys(item).length==2;
            if(propSymb && item.hasOwnProperty('key') && item.hasOwnProperty('value')){
              if(!item['value']){
                delete item['key'];
                /* delete item['value']; */
              }
            }
            if (!item[propName2]) {
              delete item[propName2];
            }
          }
        })
      } 
      if (!data[propName]) {
        delete data[propName];
      }
    }
        return data
    }