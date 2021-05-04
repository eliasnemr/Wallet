import { ToNumberPipe } from './to-number.pipe';

describe('ToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
