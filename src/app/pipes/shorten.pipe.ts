import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten', pure: false })
export class shortenPipe implements PipeTransform
{
    transform(value: any, data: number)
    {//it will take number type argument 
        if (value?.length > data) {
            return value.substr(0, data) + "..."
        }
        else {
            return value
        }
    }

}