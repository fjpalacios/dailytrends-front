import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})
export class SummarizePipe implements PipeTransform {

  transform(html: string): string {
    return html.replace(/<[^>]*>?/gm, '').substr(0, 500).concat('…');
  }

}
