import { SummarizePipe } from './summarize.pipe';

describe('SummarizePipe', () => {
  it('create an instance', () => {
    const pipe = new SummarizePipe();
    expect(pipe).toBeTruthy();
  });

  it('return text without html', () => {
    const pipe = new SummarizePipe();
    const html = '<h1>Hello, World!</h1>';
    expect(pipe.transform(html)).toBe('Hello, World!…');
  });

  it('return only the first 500 characters', () => {
    const pipe = new SummarizePipe();
    const originalSentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Duis odio nulla, sodales et arcu eu, ornare ullamcorper lorem. Sed gravida
    dignissim metus, sed fermentum quam faucibus eget. Nam efficitur hendrerit sodales.
    Vestibulum molestie sed massa eu sollicitudin. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Sed turpis lectus, mollis
    id ornare non, congue in turpis. Phasellus bibendum ligula vitae eros finibus,
    sit amet dapibus risus dictum. Nam sodales laoreet cursus.`;
    const returnedSentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Duis odio nulla, sodales et arcu eu, ornare ullamcorper lorem. Sed gravida
    dignissim metus, sed fermentum quam faucibus eget. Nam efficitur hendrerit sodales.
    Vestibulum molestie sed massa eu sollicitudin. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Sed turpis lectus, mollis
    id ornare non, congue in turpis. Phasellus bibendum ligula vitae eros finibus,
    sit amet dapibus risu…`;
    expect(pipe.transform(originalSentence)).toBe(returnedSentence);
  });
});
