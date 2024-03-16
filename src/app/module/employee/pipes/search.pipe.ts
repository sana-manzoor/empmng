import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],searchKey: any):any[] {
      const result:any=[]
      console.log(value)
      console.log(searchKey)

      if(!value || !searchKey){
        return value
      }

      value.forEach((item:any)=>{
          if(item.username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
            result.push(item)
          }
      })



 return result;
  }

}
