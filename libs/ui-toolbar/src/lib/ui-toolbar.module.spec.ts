import { async, TestBed } from '@angular/core/testing';
import { UiToolbarModule } from '@bb/ui-toolbar';

describe('UiToolbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiToolbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiToolbarModule).toBeDefined();
  });
});
