import { Pipe, PipeTransform } from '@angular/core';

/**
 * Ellipsis pipe
 */
@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  /**
   * Transform
   * @param value 
   * @param limit 
   */
  transform(value: string, limit: number = 50): any {
    if (limit >= value.length) {
      return value;
    }

    return `${value.slice(0, limit)}...`;
  }

}
