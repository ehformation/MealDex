import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer'
})
export class TronquerPipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    if(value.length <= limit) return value;

    const truncated = value.slice(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    const base = lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) : truncated;
    
    return base + '...';
  }

}
