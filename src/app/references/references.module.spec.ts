import { ReferencesModule } from './references.module';

describe('ReferencesModule', () => {
  let referencesModule: ReferencesModule;

  beforeEach(() => {
    referencesModule = new ReferencesModule();
  });

  it('should create an instance', () => {
    expect(referencesModule).toBeTruthy();
  });
});
