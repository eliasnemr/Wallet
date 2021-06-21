import { OutgoingPipe } from './outgoing.pipe';

describe('OutgoingPipe', () => {
  it('create an instance', () => {
    const pipe = new OutgoingPipe();
    expect(pipe).toBeTruthy();
  });
});
